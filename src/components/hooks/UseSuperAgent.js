const request = require('superagent')
const { useState, useEffect } = require('react')

const useSuperAgent = (url, options) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async url => {
    try {
      setIsLoading(true)
      const res = await request.get(url)
      setData(res.body)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { fetchData(url) }, [])

  return [data, isLoading, error, fetchData]
}

export default useSuperAgent
