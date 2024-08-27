const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  mode: process.env.DEVELOPMENT_ENVIRONMENT || 'development',
  output: {
    path: path.resolve(__dirname, '../build/public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../build/public'),
    },
    hot: true,
    historyApiFallback: true,
    port: 3001,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'public', to: 'assets' }], // Copies client/public assets to build folder assets when compiled
    }),
  ],
  watch: process.env.DEVELOPMENT_ENVIRONMENT === 'development',
}
