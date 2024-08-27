import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { getDataFromTree } from '@apollo/client/react/ssr'
import fetch from 'cross-fetch'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

import App from '../app/app'

import Html from './html'

export async function serverRenderer(req: express.Request, res: express.Response) {
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: process.env.GRAPHQL_ENDPOINT || '',
      fetch: fetch as unknown as WindowOrWorkerGlobalScope['fetch'],
    }),
    cache: new InMemoryCache(),
  })

  const AppComponent = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  )

  const browserConfig = {
    gqlUrl: process.env.GRAPHQL_ENDPOINT,
  }

  await getDataFromTree(AppComponent)
  const content = renderToString(AppComponent)
  const initialState = client.extract()

  const html = renderToString(<Html content={content} state={JSON.stringify(initialState)} config={browserConfig} />)
  res.status(200).send(`<!DOCTYPE html>${html}`)
}
