import { gql } from 'graphql-tag'

import { mainLike } from './base'

export const CounterGQL = gql`
  type Mutation {
    mainLike(like: Int): Int
  }
`

export const counterResolvers = {
  Mutation: {
    mainLike: async (_: any, args: { like: number }) => {
      return await mainLike(args.like)
    },
  },
}
