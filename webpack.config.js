const HtmlWebpackPligin = require('html-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        /* use: [MiniCssExtractPlugin.loader, "css-loader"], */
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: 'file-loader?name=assets/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])$/i,
        use: 'file-loader?name=./fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPligin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin()
  ]
};
