const FetchToken = async () => {
  try {
    const response = await fetch('https://serve-token.herokuapp.com/token')
    const body = await response.json()
    if (body) {
      localStorage.token = body.token
    }
  } catch (e) { console.error(e) }
}

export default FetchToken
