const webpack = require('webpack');
const ExecaPlugin = require("execa-webpack-plugin");
module.exports = {
  entry: [
    './src/app.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    contentBase: './dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExecaPlugin({
          onBeforeRun: [
            {
              args: ["build"],
              cmd: "del",
              options: {
                cwd: process.cwd()
              }
            }
          ]
        })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
          limit: 100000,
          },
        },
      },
      {
        test: /\.xml$/,
        use:{
          loader: 'xml-loader'
        },
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx','.xml']
  },

};
module.exports.node = {
  fs: 'empty',
};
