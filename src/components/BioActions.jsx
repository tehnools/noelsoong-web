import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

import {
  CardActions,
  Box,
  Button,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  header: {
    fontWeight: 700,
    lineHeight: '2.1rem'
  },
  header2: {
    lineHeight: '2rem',
    fontWeight: 300
  },
  location: {
    marginTop: '1rem',
    lineHeight: '1.2rem',
    justifyContent: 'center',
    flexDirection: 'column',
    fontWeight: 300
  },
  cardContent: {
    display: 'flex',
    flexAlign: 'start'
  },
  buttonActions: {
    display: 'block',
    padding: 0,
    marginTop: '1rem'
  },
  button: {
    marginTop: '0.5em'
  },
  buttonThird: {
    backgroundColor: theme.palette.third.main,
    color: 'white',
    '&:hover': {
      color: theme.palette.third.main
    }
  },
  icon: {
    fontSize: '1.5em',
    marginRight: '0.5rem'
  },
  box: {
    height: 'inherit',
    width: 'inherit',
    display: 'flex',
    padding: '0.25rem 0 0.25rem 0',
    lineHeight: '1rem',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontWeight: 300
  }
}))

export default function BioActions () {
  const classes = useStyles()
  return (
    <CardActions className={classes.buttonActions}>
      <Box m={0} p={0} >
        <Button
          className={`${classes.button} ${classes.buttonThird}`}
          color='default'
          variant='contained'
          size='medium'
          startIcon={<GitHubIcon/>}
          href='https://github.com/tehnools'
          fullWidth
        >
          GitHub
        </Button>
        <Button
          className={`${classes.button}`}
          variant="contained"
          color='primary'
          size='medium'
          startIcon={<LinkedInIcon />}
          href='https://www.linkedin.com/in/noel-soong/'
          fullWidth
        >
          LinkedIn
        </Button>
      </Box>
    </CardActions>
  )
}
