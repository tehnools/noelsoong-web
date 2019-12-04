import React from 'react'
import {
  Container,
  makeStyles
} from '@material-ui/core'
import Bar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 999,
    position: 'absolute',
    boxShadow: 'none',
    backgroundColor: '#00000000',
    top: theme.spacing(4)
  },
  fixed: {
    position: 'fixed',
    top: 0
  },
  header: {
    textShadow: '1px 1px 1px #00000075',
    fontFamily: 'Fredoka One'
  }
}))

export default function AppBar () {
  const classes = useStyles()

  return (
    <Bar className={classes.appBar} position="static">
      <Container>
        <Typography className={classes.header} variant="h2" component='h2'>
          N.
        </Typography>
      </Container>
    </Bar>
  )
}
