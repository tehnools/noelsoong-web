const request = require('superagent')
const { useState, useEffect } = require('react')

const useSuperAgent = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const res = await request.get(url)
        setData(res.body)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    })()
  }, []) //eslint-disable-line 

  return [data, isLoading, error]
}

export default useSuperAgent
