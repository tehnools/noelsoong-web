import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import {
  Paper,
  Typography
} from '@material-ui/core'
// import UseQuery from '../apollo/UseQuery'
import { makeStyles } from '@material-ui/core/styles'
import gql from 'graphql-tag'
const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  }
}))

const QUERY_GITHUB_CONTRIBUTION = gql`
{
  viewer {
    login
  }
  user(login: "tehnools") {
    contributionsCollection {
      contributionCalendar {
        totalContributions
      }
    }
  }
}
`

export default function Contributions (props) {
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

  const { data, loading, error } = useQuery(QUERY_GITHUB_CONTRIBUTION, { headers: { Authorization: `Bearer ${token}` } })

  if (error) return `Error! ${error}`

  return (
    <Paper className={classes.paper}>
      {loading ? props.fallback()
        : <Typography variant="h1" color="primary">
          {data && data.user.contributionsCollection.contributionCalendar.totalContributions}
        </Typography>}
      <Typography component="p">
        Total Contributions
      </Typography>
    </Paper>
  )
}
