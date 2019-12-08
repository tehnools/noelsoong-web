import React from 'react'
import './App.css'
import {
  Grid,
  createMuiTheme,
  Box,
  Container,
  CircularProgress
} from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import BioCard from './components/BioCard.jsx'
import AppBar from './components/AppBar.jsx'
import Projects from './components/Projects.jsx'
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
        main: '#636363',
        dark: '#323232',
        light: '#929292',
        contrastText: '#FFFFFF'
      }
    }
  })
)

const background = 'nz-mountains.jpg'

const useStyles = makeStyles(theme => ({
  profile: {
    position: 'relative',
    zIndex: 99,
    bottom: 200,
    marginBottom: -200
  },
  mainHeaderImageWrap: {
    width: '100%',
    height: '400px',
    backgroundColor: theme.palette.primary.main
  },
  mainHeaderImage: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: 'inherit',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    opacity: '0.5'
  }
}))

const lazyLoader = () => <CircularProgress style={{ justifySelf: 'center' }}/>

function App () {
  const classes = useStyles()
  return (
    <ThemeProvider theme={Theme}>
      {localStorage.token
        ? <div className="App" style={{ textAlign: 'left' }}>
          <AppBar/>
          <Box className={classes.mainHeader} >
            <Box className={classes.mainHeaderImageWrap}>
              <Box className={classes.mainHeaderImage}>
              </Box>
            </Box>
            <Container>
              <Grid className={classes.profile} container spacing={1}>
                <Grid item xs={12} lg={3} md={4} sm={5}>
                  <BioCard fallback={lazyLoader} />
                </Grid>
                <Grid item xs={12} lg={9} md={8} sm={7} >
                  {/* <Grid container spacing={1}> */}
                  {/* <Grid item xs={12} > */}
                  <Contributions fallback={lazyLoader} />
                  {/* </Grid> */}
                  {/* </Grid> */}
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Container className={classes.root} width={1} height={1} spacing={1}>
            <Projects />
            <RepositoryList fallback={lazyLoader} />
          </Container>
        </div>
        : <Redirect to='/' />}
    </ThemeProvider>
  )
}

export default App
