import { HydratedDocument, Schema, model } from 'mongoose'

export interface ICounter {
  _id: string
  counterType: string
  count: number
  createdAt: Date
}

const counterSchema = new Schema<ICounter>(
  {
    _id: String,
    counterType: String,
    count: Number,
    createdAt: Date,
  },
  { versionKey: false }
)

counterSchema.pre(/^(updateOne|save|findOneAndUpdate)/, function () {
  const doc = this as CounterDoc
  if (!doc.createdAt) {
    doc.createdAt = new Date()
  }
})

export const CounterModel = model<ICounter>('counter', counterSchema)
export type CounterDoc = HydratedDocument<ICounter>

export enum CounterType {
  LIKE = 'LIKE',
}
