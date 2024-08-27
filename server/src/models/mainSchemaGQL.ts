import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { gql } from 'graphql-tag'

import { CounterGQL, counterResolvers } from './counter/counterEndpoints'
import { TextsGQL, textsResolvers } from './texts/textEndpoints'

const BaseSchemaDefinition = gql`
  type Query
  type Mutation
`

const baseResolvers = {}

export const typeDefs = mergeTypeDefs([BaseSchemaDefinition, CounterGQL, TextsGQL])
export const resolvers = mergeResolvers([baseResolvers, counterResolvers, textsResolvers])
