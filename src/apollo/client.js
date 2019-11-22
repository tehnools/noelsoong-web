import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'Bearer 12784d30d12cdc0bba4e17daf548f10ed9f63abc'
  },
  cache: new InMemoryCache()
})
