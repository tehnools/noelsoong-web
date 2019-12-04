import React from 'react'
import './App.css'
import {
  Grid,
  createMuiTheme,
  Container,
  Typography
} from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import BioCard from './components/BioCard.jsx'
import AppBar from './components/AppBar.jsx'
import RepositoryList from './components/RepositoryList.jsx'
import Contributions from './components/Contributions.jsx'

const Theme = responsiveFontSizes(
  createMuiTheme({
    text: {
      h1: { fontFamily: 'Roboto' },
      h2: { fontFamily: 'Roboto' },
      h3: { fontFamily: 'Roboto' },
      h4: { fontFamily: 'Roboto' },
      h5: { fontFamily: 'Roboto' },
      p: { fontFamily: 'Roboto' },
      span: { fontFamily: 'Roboto' },
      a: { fontFamily: 'Roboto' }
    },
    palette: {
      primary: {
        main: '#3667c6',
        light: '#7c94c4',
        dark: '#14274d'
      },
      secondary: {
        main: '#1966FB',
        light: '#75a3fa',
        dark: '#0a2b69'
      },
      success: {
        main: green[500]
      },
      third: {
        main: '#323232',
        dark: '#323232',
        light: '#929292',
        contrastText: '#FFFFFF'
      }
    }
  })
)

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  header3: {
    marginTop: theme.spacing(2),
    color: '#323232'
  }
}))

const lazyLoader = () => <h1>loading...</h1>

function App () {
  const classes = useStyles()
  return (
    <ThemeProvider theme={Theme}>
      {localStorage.token
        ? <div className="App" style={{ textAlign: 'left' }}>
          <AppBar />
          <Container className={classes.root} width={1} height={1} spacing={1}>
            <Grid container spacing={1}>
              <Grid item xs={12} lg={3} md={4} sm={4}>
                <BioCard fallback={lazyLoader} />
              </Grid>
              <Grid item xs={12} lg={9} md={8} sm={8} >
                <Grid container spacing={1}>
                  <Grid item xs={12} >
                    <Contributions fallback={lazyLoader} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <RepositoryList fallback={lazyLoader} />
          </Container>
        </div>
        : <Redirect to='/' />}
    </ThemeProvider>
  )
}

export default App
