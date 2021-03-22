const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // webpack-dev-server settings
  devServer: {
    contentBase: './public',
    publicPath: '/dist',
  },

  mode: 'development',

  // Webpack Entry Point
  entry: './src/index.jsx',

  // Build output path
  output: {
    filename: 'main.js',
    path: `${__dirname }/dist`,
  },

  // Add source-map in output to debug
  devtool: 'source-map',

  resolve: {
    // An order of extensions is importatnt for the priority in extensions.
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      // Add babel-loader to compile es6
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      // Add ts-loader to compile typescript
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },

      // Minify CSS
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [miniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: 'Apple',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      template: './public/index.html',
    }),
    new miniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[id].css',
    }),
  ],
};
