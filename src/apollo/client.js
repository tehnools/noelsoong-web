import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
require('dotenv').config()

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  cache: new InMemoryCache()
})
