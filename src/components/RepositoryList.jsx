import React, { useEffect, useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const QUERY_GITHUB_REPOS = gql`
{
  viewer {
    login
  }
  user(login: "tehnools") {
    repositories(first: 9,orderBy: {field: STARGAZERS, direction: DESC }){
        nodes{
          owner{
            login,
            avatarUrl,
            url
          }
          url
          name
          primaryLanguage{
            name
          }
        }
      }
  }
}
`

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignContent: 'start',
    flexWrap: 'wrap',
    padding: theme.spacing(1)
  },
  link: {
    textDecoration: 'none'
  },
  card: {
    display: 'flex',
    minWidth: 300,
    border: '1px solid #e6e6e6',
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1)

  },
  gitIcon: {
    height: 50,
    width: 50
  }
}))

function repoFactory (rep, { classes }) {
  return <Grid item key={JSON.stringify(rep)}>
    <Card className={classes.card} >
      <CardContent>
        <Typography variant='h6' color='primary' >
          <a className={classes.link} href={rep.url}>
            {rep.name}
          </a>
        </Typography>
        <Typography variant='h7' color='secondary' >
          <a className={classes.link} href={rep.owner.url} >
            {rep.owner.login}
          </a>
        </Typography>
        <CardMedia className={classes.gitIcon} href={rep.owner.url} image={rep.owner.avatarUrl} />
      </CardContent>
    </Card>
  </Grid>
}

export default function RepositoryList (props) {
  const classes = useStyles()
  const [token, setToken] = useState(null)

  const fetchToken = async () => {
    try {
      const response = await fetch('https://serve-token.herokuapp.com/token')
      const body = await response.json()
      if (body) {
        setToken(body.token)
        localStorage.token = body.token
      }
    } catch (e) { console.error(e) }
  }
  useEffect(() => {
    fetchToken()
  })
  const { data, loading, error } = useQuery(QUERY_GITHUB_REPOS, { headers: { Authorization: token } })
  if (error) return `Error! ${error}`
  return (
    <Box className={classes.root}>
      {
        loading ? props.fallback()
          : <Grid container col={2}>
            {data.user.repositories.nodes.map(rep => {
              return repoFactory(rep, { classes })
            })}
          </Grid>
      }
    </Box>
  )
}
