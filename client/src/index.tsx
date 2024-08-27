import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './app/app'

interface WebBrowserEnv {
  gqlUrl: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config = (window as any).__WEB_ENV__ as WebBrowserEnv

const client = new ApolloClient({
  link: createHttpLink({
    uri: config.gqlUrl,
  }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cache: new InMemoryCache().restore((window as any).__APOLLO_STATE__),
})

hydrateRoot(
  document.getElementById('root')!,
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
)
