// "webpack": "^5.99.9",
// "webpack-cli": "^6.0.1",


const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = [

  // npx webpack --config-name uikit
  {

    name: 'uikit',
    mode: "production", // sets mode to miniied production output, the entry file and the path & filename to output file
  
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({    
        extractComments: false,
      })],
    },
  
    // remove file size warnings from webpack, sets new limit
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },

    entry: {
      uikit: './src/js/uikit.js',
    },
    output: {
      filename: '[name].js',
      path: __dirname + '/public/js',
    },
    
  }

];