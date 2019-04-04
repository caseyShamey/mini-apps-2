const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: path.join(__dirname, './client/index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './client/public')
  },
  devtool: '#eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: ['/node_modules/'],
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      }
    ]
  },
  externals: {
    moment: 'moment'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}