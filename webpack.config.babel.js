import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// at thi end uncomment extractCSS for compiling css file;
const extractCSS = new ExtractTextPlugin('./../css/style.bundle.css');

export default {
  context: path.resolve(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    './App.jsx'],
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    },
    {
      test: /\.scss$/,
      loader:
        // extractCSS.extract(
      [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    // )
    }]
  },
  plugins: [
    // extractCSS,
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: 'cheap-module-eval-source-map',

  resolve: {
    extensions: ['.js', '.jsx']
  }
};
