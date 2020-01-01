import React from 'react'
import { Paper, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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

export default function Contributions (props) {
  const classes = useStyles()
  const { data, isLoading, fallback } = props
  return (
    <Paper className={classes.root}>

      {
        isLoading
          ? <Box className={classes.loaderBox}>
            {fallback()}
          </Box>
          : <>
            <Typography variant="h1" color="primary" style={{ fontWeight: 700 }}>
              {data && data.data.user.contributionsCollection.contributionCalendar.totalContributions}
            </Typography>
            <Typography component="p" >
        Total Contributions this year
            </Typography>
          </>
      }
    </Paper>
  )
}
