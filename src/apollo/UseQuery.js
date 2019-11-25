import { client } from '../apollo/client'

const UseQuery = async (query, options) => {
  try {
    return { data: client.readQuery({ query, ...options }) }
  } catch (promise) {
    throw client.query({ query, ...options })
      .then(data => ({ data }))
  }
}

export default UseQuery
