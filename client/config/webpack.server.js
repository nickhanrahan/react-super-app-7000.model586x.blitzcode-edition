const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

class LogCompilationPlugin {
  apply(compiler) {
    compiler.hooks.compile.tap('LogCompilationPlugin', () => {
      console.info('Starting a new compilation...')
    })
  }
}

module.exports = {
  entry: path.resolve(__dirname, '../src/server/server.ts'),
  target: 'node',
  mode: process.env.DEVELOPMENT_ENVIRONMENT || 'development',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'server.js',
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
  plugins: [
    new LogCompilationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new NodemonPlugin({
      script: path.resolve(__dirname, '../build/server.js'),
      watch: path.resolve('./build'),
      ext: 'js,ts,json',
    }),
  ],
}
