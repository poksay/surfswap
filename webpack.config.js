const webpack = require('webpack');

module.exports = {
  entry: './app/App.js',
  output: {
    path: './api/public',
    filename: 'index.js',
  },
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: "./api/public",
    port: 3333
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
    ],
  },
};
