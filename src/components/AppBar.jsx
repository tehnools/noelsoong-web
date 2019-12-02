import React from 'react'
import Container from '@material-ui/core/Container'
import Bar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

export default function AppBar () {
  return (
    <Bar position="static">
      <Container>
        <Typography variant="h2" component='h2'>
          N
        </Typography>
      </Container>
    </Bar>
  )
}
