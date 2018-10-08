/* webpack import */
var _system = require('./system/system');
var webpack = require('webpack');
var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/* Export modules de info */
module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.join(__dirname, 'public/src/js'),
    filename: "bundle.js",
    publicPath: "/"
  },
  mode: (global.enviroment == 'prod')? 'production': 'development',

  plugins: global.enviroment == 'prod'
    ? [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]
    : [],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-1'],
            plugins: ["transform-class-properties"]
          }
        }
      }, {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
};
