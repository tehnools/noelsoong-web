import React from 'react'
import {
  Paper,
  Typography
} from '@material-ui/core'
import UseQuery from '../apollo/UseQuery'
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

export default function Contributions () {
  const classes = useStyles()
  const { data } = UseQuery(QUERY_GITHUB_CONTRIBUTION)
  return (
    <Paper className={classes.paper}>
      <Typography variant="h1" color="primary">
        {data.user.contributionsCollection.contributionCalendar.totalContributions}
      </Typography>
      <Typography component="p">
         Total Contributions
      </Typography>
    </Paper>
  )
}
