import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

dotenv.config()

export async function connectToDatabase() {
  console.info('Connecting to MongoDB...')
  const mongoURI = process.env.MONGO_URI
  try {
    await mongoose.connect(mongoURI)
    console.info('Connected to MongoDB')
  } catch (err) {
    console.error(`Could not connect to MongoDB: ${err}`)
    // Should throw error here if using database
    // throw new Error(`Could not connect to MongoDB: ${err}`)
  }
}

export function makeId() {
  return nanoid(14)
}
