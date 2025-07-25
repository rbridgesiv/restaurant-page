const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './public',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant Page',
      template: './src/template.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '.' }, // copies everything from public to dist root
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }
    ],
  },
};
