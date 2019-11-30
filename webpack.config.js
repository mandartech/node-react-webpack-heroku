const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: './ui/src/app.js',
  output: {
    path: path.resolve(__dirname, 'ui/public/'),
    filename: '[name].js',
    publicPath: path.relative(__dirname, 'ui/public/')
  },
  resolve: { extensions: [".jsx", ".js", ".css"] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      { test: /\.css$/, exclude: /node_modules/, use: 'css-loader' },
      { test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/images'
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ],
      }
    ]
  }
};
