const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackChangeAssetsExtensionPlugin = require('html-webpack-change-assets-extension-plugin');

module.exports = {
  mode: "production",
  // devtool: "source-map",
  entry: './ui/src/app.js',
  output: {
    path: path.resolve(__dirname, 'ui/public/'),
    filename: '[name].[contenthash].js'
  },
  resolve: { extensions: [".jsx", ".js", ".css"] },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
      { test: /\.css$/, loader: 'style-loader' },
      { test: /\.css$/, exclude: /node_modules/, use: 'css-loader' },
      { test: /.*\.(gif|png|jpe?g|svg)$/i, use: [
          { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: '/images' } }
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './ui/src/index.html.template',
      jsExtension: ".gz"
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      minRatio: 0.8,
      test: /\.(js)$/,
      cache: true,
      deleteOriginalAssets: true,
    }),
    new HtmlWebpackChangeAssetsExtensionPlugin()
  ],
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
};
