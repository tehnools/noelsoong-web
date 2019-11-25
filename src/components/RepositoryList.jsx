import React, { useEffect, useState } from 'react'
import {
  Box,
  Chip,
  Avatar,
  makeStyles
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
  console.log(rep)
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

export default function RepositoryList (props) {
  const classes = useStyles()
  const [token, setToken] = useState(null)

  // const sortByLength = (a, b) => a.name.length < b.name.length
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
        loading ? props.fallback() : data.user.repositories.nodes.map(chipFatory)
      }
    </Box>
  )
}
