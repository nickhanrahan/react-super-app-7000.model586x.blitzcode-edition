import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Mutation = {
  __typename?: 'Mutation'
  mainLike?: Maybe<Scalars['Int']['output']>
}

export type MutationMainLikeArgs = {
  like?: InputMaybe<Scalars['Int']['input']>
}

export type Query = {
  __typename?: 'Query'
  getTexts?: Maybe<Array<Maybe<TextTest>>>
}

export type TextTest = {
  __typename?: 'TextTest'
  date?: Maybe<Scalars['String']['output']>
  text?: Maybe<Scalars['String']['output']>
}

export type GetTextsQueryVariables = Exact<{ [key: string]: never }>

export type GetTextsQuery = {
  __typename?: 'Query'
  getTexts?: Array<{ __typename?: 'TextTest'; text?: string | null; date?: string | null } | null> | null
}

export type MainLikeMutationVariables = Exact<{
  like?: InputMaybe<Scalars['Int']['input']>
}>

export type MainLikeMutation = { __typename?: 'Mutation'; mainLike?: number | null }

export const GetTextsDocument = gql`
  query GetTexts {
    getTexts {
      text
      date
    }
  }
`

/**
 * __useGetTextsQuery__
 *
 * To run a query within a React component, call `useGetTextsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTextsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTextsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTextsQuery(baseOptions?: Apollo.QueryHookOptions<GetTextsQuery, GetTextsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetTextsQuery, GetTextsQueryVariables>(GetTextsDocument, options)
}
export function useGetTextsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTextsQuery, GetTextsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetTextsQuery, GetTextsQueryVariables>(GetTextsDocument, options)
}
export type GetTextsQueryHookResult = ReturnType<typeof useGetTextsQuery>
export type GetTextsLazyQueryHookResult = ReturnType<typeof useGetTextsLazyQuery>
export type GetTextsQueryResult = Apollo.QueryResult<GetTextsQuery, GetTextsQueryVariables>
export const MainLikeDocument = gql`
  mutation MainLike($like: Int) {
    mainLike(like: $like)
  }
`
export type MainLikeMutationFn = Apollo.MutationFunction<MainLikeMutation, MainLikeMutationVariables>

/**
 * __useMainLikeMutation__
 *
 * To run a mutation, you first call `useMainLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMainLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mainLikeMutation, { data, loading, error }] = useMainLikeMutation({
 *   variables: {
 *      like: // value for 'like'
 *   },
 * });
 */
export function useMainLikeMutation(
  baseOptions?: Apollo.MutationHookOptions<MainLikeMutation, MainLikeMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<MainLikeMutation, MainLikeMutationVariables>(MainLikeDocument, options)
}
export type MainLikeMutationHookResult = ReturnType<typeof useMainLikeMutation>
export type MainLikeMutationResult = Apollo.MutationResult<MainLikeMutation>
export type MainLikeMutationOptions = Apollo.BaseMutationOptions<MainLikeMutation, MainLikeMutationVariables>
