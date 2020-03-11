const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : ['babel-polyfill', './src/js/index.js'],
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : 'bundle.js',
    publicPath: ''
  },
  mode: 'production',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    index: 'index.html',
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
           'babel-loader'
        ]
      },
      {
        test: /\.pug$/,
        use: [
          'pug-loader'         // We need to install this loader as well.
        ]
      }
    ]
  },

  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new HtmlWebpackPlugin({
      title: 'Hello World',
      filename: 'home/home.html',
      template: 'src/index.html'
    })
  ]
}