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
      'common/lib/utils': path.join(__dirname, 'lib', 'utils'),
      'common/lib/api/person/v1': path.join(
        __dirname,
        'lib',
        'api',
        'person',
        'v1'
      ),
      'common/lib/api/contact-details/v1': path.join(
        __dirname,
        'lib',
        'api',
        'contact-details',
        'v1'
      ),
      'common/lib/api/tenure/v1': path.join(
        __dirname,
        'lib',
        'api',
        'tenure',
        'v1'
      ),
      'common/lib/api/comments/v1': path.join(
        __dirname,
        'lib',
        'api',
        'comments',
        'v1'
      ),
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
        CONFIGURATION_API_URL_V1: dotenv.CONFIGURATION_API_URL_V1 || '',
        CONTACT_DETAILS_API_URL_V1: dotenv.CONTACT_DETAILS_API_URL_V1 || '',
        PERSON_API_URL_V1: dotenv.PERSON_API_URL_V1 || '',
        NOTES_API_URL_V1: dotenv.NOTES_API_URL_V1 || '',
        TENURE_API_URL_V1: dotenv.TENURE_API_URL_V1 || '',
        PROPERTY_API_URL_V1: dotenv.PROPERTY_API_URL_V1 || '',
        REFERENCE_DATA_API_URL_V1: dotenv.REFERENCE_DATA_API_URL_V1 || '',
      }),
      new ImportMapWebpackPlugin({
        namespace: '@mtfh',
        basePath: process.env.APP_CDN || 'http://localhost:8040',
      }),
    ],
  });
};
