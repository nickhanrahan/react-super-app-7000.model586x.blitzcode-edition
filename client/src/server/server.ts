import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'

import { serverRenderer } from './serverRenderer'

dotenv.config()

const PORT = 3000
const app = express()

app.use(express.static('build/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/*', serverRenderer)

app.listen(PORT, () => {
  console.info(`Server is listening on port ${PORT}`)
})
