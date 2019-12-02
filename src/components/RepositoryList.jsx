import React from 'react'
import {
  Box,
  Grid,
  makeStyles
} from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import RepositoryCard from './RepositoryCard.jsx'

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
    padding: theme.spacing(1)
  }
}))

export default function RepositoryList (props) {
  const classes = useStyles()
  const { data, loading, error } = useQuery(QUERY_GITHUB_REPOS)
  if (error) return `Error! ${error}`

  return (
    loading && data === null ? props.fallback()
      : <Box className={classes.root}>
        <Grid container
          alignItems='flex-start'
          justifyContent='flex-start'
          wrap='wrap'
          xl='auto'
          lg='auto'
          spacing={1}
        >
          {data && data.user.repositories.nodes.map(repo => <RepositoryCard key={JSON.stringify(repo)} repo={repo} />)}
        </Grid>
      </Box>
  )
}
