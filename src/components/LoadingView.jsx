import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import FetchToken from '../api/FetchToken.js'
import { Container } from '@material-ui/core'

async function waitToken () {
  const { token } = await FetchToken()
  return token
}

export default function LoadingView () {
  const [toHome, setToHome] = useState(false)

  useEffect(() => {
    const token = waitToken()
    if (token) {
      setToHome(true)
    }
  }, [])

  return (
    <>
      {toHome ? <Redirect to='/home' /> : null}
      <Container id="loader" className='loader' style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        loading...
      </Container>
    </>
  )
}
