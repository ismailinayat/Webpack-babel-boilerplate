const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : ['./src/js/navigation.js'],
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : 'js/bundle.js',
    publicPath: '../'
  },
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
            esModule: false,
          }

        }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',

        }
          
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
           loader: 'babel-loader',
           options: {
               presets: [ '@babel/env' ],
               plugins: [ 'transform-class-properties' ]
             
           }
        }
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
    new MiniCssExtractPlugin({
      filename: 'styles/styles.css',
      publicPath: '../styles/'
    }),
    new HtmlWebpackPlugin({
      title: 'Hello World',
      filename: 'views/index.html',
      template: 'src/templates/index.html'
    })
  ]
}