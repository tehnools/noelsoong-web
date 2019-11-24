import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'

if(!process.env.GITHUB_TOKEN) {
  console.error('Make sure you configure your token to use Apollo!');
  
}

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'Bearer ' + process.env.GITHUB_TOKEN
  },
  cache: new InMemoryCache()
})
