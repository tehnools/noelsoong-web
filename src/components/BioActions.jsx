import React from 'react'
import GitHubIcon from './icons/GithubIcon.jsx'

import {
  CardActions,
  Box,
  Button,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  header: {
    fontFamily: 'Roboto',
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: '2.1rem'
  },
  header2: {
    fontFamily: 'Roboto',
    fontSize: '1.7rem',
    lineHeight: '2rem',
    fontWeight: 300
  },
  location: {
    marginTop: '1rem',
    lineHeight: '1.2rem',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    justifyXontent: 'center',
    flexDirection: 'column',
    fontWeight: 300
  },
  media: {
    width: '100%',
    height: 325
  },
  cardContent: {
    display: 'flex',
    flexAlign: 'start'
  },
  buttonActions: {
    padding: 0,
    marginTop: '1rem'
  },
  buttonThird: {
    backgroundColor: theme.palette.third.main,
    color: 'white',
    marginLeft: 0,
    marginBottom: theme.spacing(1)
  }
}))

export default function BioActions () {
  const classes = useStyles()
  return (
    <CardActions className={classes.buttonActions}>
      <Box m={0} p={0}>
        <Button
          className={classes.buttonThird}
          color='default'
          variant='contained'
          size='medium'
          href='https://github.com/tehnools'
          fullWidth
        >
          <GitHubIcon/>
            GitHub
        </Button>
        <Button
          variant="contained"
          color='primary'
          size='medium'
          href='https://www.linkedin.com/in/noel-soong/'
          fullWidth
        >
            LinkedIn
        </Button>
      </Box>
    </CardActions>
  )
}
