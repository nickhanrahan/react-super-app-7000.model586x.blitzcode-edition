const clientConfig = require('./webpack.client')
const serverConfig = require('./webpack.server')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  console.info(`Compile in production mode: ${isProduction}`)

  return [
    {
      ...clientConfig,
      mode: isProduction ? 'production' : 'development',
      ...(isProduction ? {} : { devtool: 'inline-source-map' }),
    },
    {
      ...serverConfig,
      mode: isProduction ? 'production' : 'development',
      ...(isProduction ? {} : { devtool: 'inline-source-map' }),
    },
  ]
}
