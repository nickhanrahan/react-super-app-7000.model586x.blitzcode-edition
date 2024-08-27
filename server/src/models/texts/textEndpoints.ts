import { gql } from 'graphql-tag'

import { generateTexts } from './base'

export const TextsGQL = gql`
  type TextTest {
    text: String
    date: String
  }

  type Query {
    getTexts: [TextTest]
  }
`

export const textsResolvers = {
  Query: {
    getTexts: () => {
      return generateTexts()
    },
  },
}
