import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Paper, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import gql from 'graphql-tag'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100%'
  },
  loaderBox:
  {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
    width: '100%'
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
  const { data, loading, error } = useQuery(QUERY_GITHUB_CONTRIBUTION)

  if (error) return `Error! ${error}`

  return (
    <Paper className={classes.root}>
      {loading
        ? <Box className={classes.loaderBox}>
          {props.fallback()}
        </Box>
        : <Typography variant="h1" color="primary" style={{ fontWeight: 700 }}>
          {data && data.user.contributionsCollection.contributionCalendar.totalContributions}
        </Typography>}
      <Typography component="p" >
        Total Contributions this year
      </Typography>
    </Paper>
  )
}
