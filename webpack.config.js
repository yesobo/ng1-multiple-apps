var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

if (process.argv.indexOf('-p') !== -1) {
  process.env.NODE_ENV = 'production';
}

let config = {
  output: {
    path: __dirname + '/dist'
  }
}

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractSCSS = new ExtractTextPlugin('bundle.css');

var common = {
  entry: './src/main.js',
  output: { 
    path: config.output.path, 
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    rules: [{
      test: /.js?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }]
    }, {
      test: /\.s?css$/,
      loader: extractSCSS.extract({
        fallbackLoader: 'style-loader',
        loader: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
          query: {
            data: "$NODE_ENV: " + process.env.NODE_ENV + ";" 
          } 
        }]
      }),
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader?name=./assets/fonts/[name].[ext]'
    }]
  },
  plugins: [
    extractSCSS
  ],
  devServer: {
    contentBase: './src'
  }
};

if (process.env.NODE_ENV !== 'production' || !process.env.NODE_ENV) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true
    }
  });
}

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(common, {
    devtool: 'source-map'
  });
}