const path = require('path');
const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const webpack = require('webpack');
const dotenv = require('dotenv').config();
const {
  ImportMapWebpackPlugin,
} = require('@hackney/webpack-import-map-plugin');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'mtfh',
    projectName: 'common',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    entry: {
      common: path.join(__dirname, 'lib', 'mtfh-common.tsx'),
      'common/lib/auth': path.join(__dirname, 'lib', 'auth'),
      'common/lib/http': path.join(__dirname, 'lib', 'http'),
      'common/lib/config': path.join(__dirname, 'lib', 'config'),
      'common/lib/components': path.join(__dirname, 'lib', 'components'),
      'common/lib/hooks': path.join(__dirname, 'lib', 'hooks'),
    },
    output: {
      filename: '[name].[contenthash].js',
    },
    resolve: {
      alias: {
        '@mtfh/common/lib': path.join(__dirname, 'lib'),
      },
    },
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
      new ImportMapWebpackPlugin({
        namespace: '@mtfh',
        basePath: process.env.APP_CDN || 'http://localhost:8040',
      }),
    ],
  });
};
