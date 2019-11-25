import React from 'react'
import {
  Box,
  Grid,
  makeStyles
} from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import RepositoryCard from './RepositoryCard'

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
  }
}))

export default function RepositoryList (props) {
  const classes = useStyles()
  const { data, loading, error } = useQuery(QUERY_GITHUB_REPOS)

  if (error) return `Error! ${error}`

  return (
    <Box className={classes.root}>
      {
        loading && data === null ? props.fallback()
          : <Grid container col={2}>
            {data && data.user.repositories.nodes.map(repo => <RepositoryCard key={JSON.stringify(repo)} repo={repo} />)}
          </Grid>
      }
    </Box>
  )
}
