import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractCSS = new ExtractTextPlugin('./css/style.bundle.css');

export default {
  context: path.resolve(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    './App.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3000
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      loader: extractCSS.extract([
        'css-loader',
        'sass-loader'
      ])
    }]
  },
  plugins: [
    extractCSS
  ],

  devtool: 'cheap-module-eval-source-map',

  resolve: {
    extensions: ['.js', '.jsx']
  }
};
