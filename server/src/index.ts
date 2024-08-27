import http from 'http'

import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

import { resolvers, typeDefs } from './models/mainSchemaGQL'
import { connectToDatabase } from './utils/mongo-utils'

dotenv.config()

const PORT = 4000
const GRAPHQL_PATH = '/graphql'

const app = express()

const httpServer = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.options('*', cors())

app.use(cors())

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

await connectToDatabase()

await server.start()

app.use(GRAPHQL_PATH, bodyParser.json(), expressMiddleware(server))

app.get('/healthcheck', (req, res) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  }

  try {
    return res.status(200).json(healthCheck)
  } catch (e: any) {
    healthCheck.message = e.message as string
    return res.status(503).send(healthCheck)
  }
})

httpServer.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}${GRAPHQL_PATH}`)
})

export default app
