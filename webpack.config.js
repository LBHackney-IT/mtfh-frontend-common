const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const webpack = require('webpack');
const dotenv = require('dotenv').config();

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'mtfh',
    projectName: 'common',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    externals: ['react', 'react-dom', 'react-router-dom', 'formik'],
    plugins: [
      new webpack.EnvironmentPlugin({
        AUTH_ALLOWED_GROUPS: dotenv.AUTH_ALLOWED_GROUPS || '',
        AUTH_DOMAIN: dotenv.AUTHDOMAIN || '',
        COOKIE_DOMAIN: dotenv.COOKIE_DOMAIN || '',
        AUTH_TOKEN_NAME: dotenv.AUTH_TOKEN_NAME || '',
        CONFIGURATION_API_URL: dotenv.CONFIGURATION_API_URL || '',
      }),
    ],
  });
};
