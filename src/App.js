import React, { Suspense } from 'react'
import './App.css'
import BioCard from './components/BioCard.jsx'
import Contributions from './components/Contributions.jsx'
import AppBar from './components/AppBar.jsx'
import {
  Grid,
  createMuiTheme,
  Container,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import green from '@material-ui/core/colors/green'
import RepositoryList from './components/RepositoryList.jsx'

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3667c6'
    },
    secondary: {
      main: '#1966FB'
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

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  header3: {
    marginTop: theme.spacing(2),
    color: theme.palette.third
  }
}))

const lazyLoader = () => <h1>loading...</h1>

function App () {
  const classes = useStyles()
  return (
    <ThemeProvider theme={Theme}>
      <div className="App" style={{ textAlign: 'left' }}>
        <AppBar />
        <Container className={classes.root} width={1} height={1} justifyContent='center' spacing={1}>
          <Grid container spacing={1}>
            <Grid item xs={12} lg={4} md={4} sm={4}>
              <Suspense fallback={lazyLoader()} >
                <BioCard />
              </Suspense>
            </Grid>
            <Grid item xs={12} lg={10} md={8} sm={8} >
              <Grid container spacing={1}>
                <Grid item xs={12} >
                  <Suspense fallback={lazyLoader()}>
                    <Contributions />
                  </Suspense>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography className={classes.header3} variant='h3'>
            Repositories
          </Typography>
          <Suspense fallback={lazyLoader()}>
            <RepositoryList />
          </Suspense>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App
