const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  return {
    entry: {
      common: path.join(__dirname, "lib", "mtfh-common.tsx"),
    },
    output: {
      libraryTarget: 'commonjs'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss', '.css', '.ts', '.tsx'],
      // alias: {
      //   "@mtfh/common/lib": path.join(__dirname, "lib"),
      // },
    },
    module: {
      rules: [
        // {
        //   test: /\.(js|jsx)$/,
        //   include: path.resolve(__dirname, 'lib'),
        //   use: {
        //     loader: 'babel-loader',
        //     // query: {
        //     //   cacheDirectory: true,
        //     // },
        //   },
        // },
        {
          test: /\.(tsx|ts)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
  };
};
