const fs = require("fs");
const path = require("path");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const webpack = require("webpack");
const dotenv = require("dotenv").config();
const { ImportMapWebpackPlugin } = require("@hackney/webpack-import-map-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const insertStyleElement = (element) => {
  const loadedStylesheets = window.__MTFH_LOADED_STYLESHEETS__;

  if (
    Array.isArray(loadedStylesheets) &&
    loadedStylesheets.includes("@mtfh/common/lib/components")
  ) {
    return;
  }

  document.head.appendChild(element);
};

const styleLoader = {
  loader: "style-loader",
  options: {
    insert: insertStyleElement,
  },
};

// Dual CSS pipeline: the same files are compiled twice.
// 1. Default imports (from component TSX) still use style-loader so existing roots
//    (MMH, HSF, etc.) keep getting <style> injection when they load
//    @mtfh/common/lib/components. That is the backward-compatible path.
// 2. Imports with ?extract go through MiniCssExtractPlugin so updated roots can load
//    a real .css file from stylesheet-map.json (CSP-friendly, no inline styles).
// Webpack treats file.scss and file.scss?extract as different modules, which is
// what lets both loaders run on the same source.

// webpack-config-single-spa ships a .css rule with style-loader (used by
// @reach/dialog/styles.css). Without this, that rule would also match ?extract
// imports and style-loader would win. Restrict it so extract imports fall through
// to the MiniCssExtractPlugin rules below.
const excludeExtractQuery = (rule) => {
  if (!rule?.test) {
    return rule;
  }

  const test = String(rule.test);
  if (!test.includes("css")) {
    return rule;
  }

  return {
    ...rule,
    resourceQuery: { not: /extract/ },
  };
};

const configureStyleLoaderInsert = (rule) => ({
  ...rule,
  use: Array.isArray(rule.use)
    ? rule.use.map((entry) => {
        const loader = typeof entry === "string" ? entry : entry.loader;
        if (!loader?.includes("style-loader")) {
          return entry;
        }
        return {
          ...(typeof entry === "string" ? { loader: entry } : entry),
          options: {
            ...(typeof entry === "string" ? {} : entry.options),
            ...styleLoader.options,
          },
        };
      })
    : rule.use,
});

// Extra webpack entry used only to produce common/lib/components.[hash].css.
// Each path is suffixed with ?extract so these imports do not share a module
// identity with the style-loader copies pulled in from component TSX files.
// @reach/dialog/styles.css is included here because dialog.tsx imports it as
// plain CSS, not SCSS.
const collectComponentStyleEntries = () => {
  const files = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (entry.name.endsWith(".scss")) {
        files.push(`${fullPath}?extract`);
      }
    }
  };

  walk(path.join(__dirname, "lib", "components"));
  files.push(`${require.resolve("@reach/dialog/styles.css")}?extract`);
  return files;
};

// Hackney's import-map plugin only records .js assets. Roots need the hashed CSS
// URL without rebuilding whenever common deploys, so this emits a sibling JSON
// manifest. S3 already serves *.json with must-revalidate; hashed .css stays
// immutable. The key @mtfh/common/lib/components matches the JS import-map name.
class StylesheetMapWebpackPlugin {
  constructor({ namespace, basePath }) {
    this.namespace = namespace;
    this.basePath = basePath;
  }

  apply(compiler) {
    const pluginName = "StylesheetMapWebpackPlugin";
    const { RawSource } = compiler.webpack.sources;

    compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: pluginName,
          stage: webpack.Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
        },
        (assets) => {
          const stylesheets = Object.keys(assets)
            .filter((file) => file.endsWith(".css"))
            .reduce((map, file) => {
              const name = file.split(".")[0];
              return {
                ...map,
                [`${this.namespace}/${name}`]: new URL(file, this.basePath).href,
              };
            }, {});

          compilation.emitAsset(
            "stylesheet-map.json",
            new RawSource(JSON.stringify({ stylesheets })),
          );
        },
      );
    });
  }
}

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mtfh",
    projectName: "common",
    webpackConfigEnv,
    argv,
  });

  // Keep the single-spa default CSS rule for normal imports; skip ?extract requests.
  defaultConfig.module.rules = defaultConfig.module.rules.map((rule) =>
    configureStyleLoaderInsert(excludeExtractQuery(rule)),
  );

  const apiPath = path.join(__dirname, "lib", "api");
  const appCdn = process.env.APP_CDN || "http://localhost:8040";

  return merge(defaultConfig, {
    entry: {
      common: path.join(__dirname, "lib", "mtfh-common.tsx"),
      "common/lib/auth": path.join(__dirname, "lib", "auth"),
      "common/lib/http": path.join(__dirname, "lib", "http"),
      "common/lib/config": path.join(__dirname, "lib", "config"),
      "common/lib/configuration": path.join(__dirname, "lib", "configuration"),
      "common/lib/components": path.join(__dirname, "lib", "components"),
      // CSS-only companion entry. Its JS chunk is unused at runtime; MiniCssExtractPlugin
      // filename below remaps the CSS to common/lib/components.[hash].css so the
      // stylesheet map key matches the JS module name. Existing roots never import this.
      "common/lib/components-styles": collectComponentStyleEntries(),
      "common/lib/hooks": path.join(__dirname, "lib", "hooks"),
      "common/lib/utils": path.join(__dirname, "lib", "utils"),
      "common/lib/context": path.join(__dirname, "lib", "context"),
      "common/lib/api/person/v1": path.join(apiPath, "person", "v1"),
      "common/lib/api/person/v2": path.join(apiPath, "person", "v2"),
      "common/lib/api/contact-details/v1": path.join(apiPath, "contact-details", "v1"),
      "common/lib/api/contact-details/v2": path.join(apiPath, "contact-details", "v2"),
      "common/lib/api/cautionary-alerts/v1": path.join(
        apiPath,
        "cautionary-alerts",
        "v1",
      ),
      "common/lib/api/tenure/v1": path.join(apiPath, "tenure", "v1"),
      "common/lib/api/comments/v1": path.join(apiPath, "comments", "v1"),
      "common/lib/api/comments/v2": path.join(apiPath, "comments", "v2"),
      "common/lib/api/asset/v1": path.join(apiPath, "asset", "v1"),
      "common/lib/api/reference-data/v1": path.join(apiPath, "reference-data", "v1"),
      "common/lib/api/address/v1": path.join(apiPath, "address", "v1"),
      "common/lib/api/process/v1": path.join(apiPath, "process", "v1"),
      "common/lib/api/process/v2": path.join(apiPath, "process", "v2"),
      "common/lib/api/patch/v1": path.join(apiPath, "patch", "v1"),
      "common/lib/api/housing-finance-interim-api": path.join(
        apiPath,
        "housing-finance-interim-api",
      ),
      "common/lib/api/equality-information/v1": path.join(
        apiPath,
        "equality-information",
        "v1",
      ),
    },
    output: {
      filename: "[name].[contenthash].js",
    },
    resolve: {
      alias: {
        "@mtfh/common/lib": path.join(__dirname, "lib"),
      },
    },
    module: {
      rules: [
        // Extract path: used only by the components-styles entry (?extract query).
        {
          test: /\.css$/i,
          resourceQuery: /extract/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.scss$/i,
          resourceQuery: /extract/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        // Compatible path: component TSX imports, same as before this change.
        {
          test: /\.scss$/i,
          resourceQuery: { not: /extract/ },
          use: [styleLoader, "css-loader", "sass-loader"],
        },
      ],
    },
    externals: ["react", "react-dom", "react-router-dom", "formik", "date-fns"],
    plugins: [
      new MiniCssExtractPlugin({
        // Publish the extracted file under the components name, not components-styles,
        // so stylesheet-map.json can use the same key as import-map.json.
        filename: ({ chunk }) =>
          chunk.name === "common/lib/components-styles"
            ? "common/lib/components.[contenthash].css"
            : "[name].[contenthash].css",
      }),
      new webpack.EnvironmentPlugin({
        APP_ENV: process.env.APP_ENV || "test",
        AUTH_ALLOWED_GROUPS: dotenv.AUTH_ALLOWED_GROUPS || "",
        AUTH_DOMAIN: dotenv.AUTHDOMAIN || "",
        COOKIE_DOMAIN: dotenv.COOKIE_DOMAIN || "",
        AUTH_TOKEN_NAME: dotenv.AUTH_TOKEN_NAME || "",
        CONFIGURATION_API_URL_V1: dotenv.CONFIGURATION_API_URL_V1 || "",
        CONTACT_DETAILS_API_URL_V1: dotenv.CONTACT_DETAILS_API_URL_V1 || "",
        CONTACT_DETAILS_API_URL_V2: dotenv.CONTACT_DETAILS_API_URL_V2 || "",
        CAUTIONARY_API_URL_V1: dotenv.CAUTIONARY_API_URL_V1 || "",
        PERSON_API_URL_V1: dotenv.PERSON_API_URL_V1 || "",
        PERSON_API_URL_V2: dotenv.PERSON_API_URL_V2 || "",
        NOTES_API_URL_V1: dotenv.NOTES_API_URL_V1 || "",
        NOTES_API_URL_V2: dotenv.NOTES_API_URL_V2 || "",
        TENURE_API_URL_V1: dotenv.TENURE_API_URL_V1 || "",
        PROPERTY_API_URL_V1: dotenv.PROPERTY_API_URL_V1 || "",
        REFERENCE_DATA_API_URL_V1: dotenv.REFERENCE_DATA_API_URL_V1 || "",
        ADDRESS_API_URL_V1: dotenv.ADDRESS_API_URL_V1 || "",
        ADDRESS_API_URL_V2: dotenv.ADDRESS_API_URL_V2 || "",
        EQUALITY_INFORMATION_API_URL_V1: dotenv.EQUALITY_INFORMATION_API_URL_V1 || "",
        HOUSING_FINANCE_INTERIM_API_URL_V1:
          dotenv.HOUSING_FINANCE_INTERIM_API_URL_V1 || "",
        REPAIRS_HUB_APP_URL: dotenv.REPAIRS_HUB_APP_URL || "",
        REPAIRS_HUB_API_URL: dotenv.REPAIRS_HUB_API_URL || "",
        PROCESS_API_URL_V1: dotenv.PROCESS_API_URL_V1 || "",
        PROCESS_API_URL_V2: dotenv.PROCESS_API_URL_V2 || "",
        HOUSINGSEARCH_API_URL_V1: dotenv.HOUSINGSEARCH_API_URL_V1 || "",
        PATCHES_AND_AREAS_API_V1: dotenv.PATCHES_AND_AREAS_API_V1 || "",
        COGNITO_TOKEN_NAME: dotenv.COGNITO_TOKEN_NAME || "",
        COGNITO_DOMAIN: dotenv.COGNITO_DOMAIN || "",
        COGNITO_CLIENT_IDS: dotenv.COGNITO_CLIENT_IDS || "",
        COGNITO_USER_POOL_ID: dotenv.COGNITO_USER_POOL_ID || "",
        COGNITO_PKCE_VERIFIER_SESSION_STORAGE_NAME:
          dotenv.COGNITO_PKCE_VERIFIER_SESSION_STORAGE_NAME || "",
      }),
      new ImportMapWebpackPlugin({
        namespace: "@mtfh",
        basePath: appCdn,
      }),
      new StylesheetMapWebpackPlugin({
        namespace: "@mtfh",
        basePath: appCdn,
      }),
    ],
  });
};
