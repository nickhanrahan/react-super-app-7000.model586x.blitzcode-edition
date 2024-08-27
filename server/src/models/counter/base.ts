import { makeId } from '../../utils/mongo-utils'

import { CounterModel, CounterType } from './counter'

export async function mainLike(like: number) {
  const counterType = CounterType.LIKE
  if (like === 0) {
    const likeCounter = await CounterModel.findOne({ counterType })
    if (likeCounter) {
      return likeCounter.count
    } else {
      const newLikeCounter = new CounterModel({
        _id: makeId(),
        counterType,
        count: 0,
      })
      await newLikeCounter.save()
      return 0
    }
  } else {
    const likeCounter = await CounterModel.findOneAndUpdate(
      {
        counterType,
      },
      {
        $inc: { count: like },
      }
    )
    return likeCounter.count + like
  }
}
