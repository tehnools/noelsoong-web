import React from 'react'
import {
  Box,
  Chip,
  Avatar,
  Link,
  CardContent,
  Typography,
  makeStyles
} from '@material-ui/core'
import UseQuery from '../apollo/UseQuery'
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
            avatarUrl
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

function avatarFactory (src, title) {
  return (
    <Avatar src={src} title={title} />
  )
}

function colorSelector (lang) {
  console.log(lang)
  switch (lang.toLowerCase()) {
    case 'javascript':
      return '#3667C6'
    case 'python':
      return '#F9B813'
    case 'dart':
      return 'EB1E02'
    default:
      return 'grey'
  }
}

function chipFatory (rep) {
  const color = colorSelector(rep.primaryLanguage.name)
  return <Chip
    key={rep}
    label={rep.name}
    href={rep.url}
    style={{
      color: 'white',
      backgroundColor: color
    }}
    avatar={avatarFactory(rep.owner.avatarUrl, rep.owner.login)}
    clickable
  />
}

export default function RepositoryList () {
  const { data } = UseQuery(QUERY_GITHUB_REPOS)
  const classes = useStyles()
  const sortByLength = (a, b) => a.name.length < b.name.length
  const repos = data.user.repositories.nodes.sort(sortByLength)
  return (
    <Box className={classes.root}>
      {
        repos.map(chipFatory)
      }
    </Box>
  )
}
