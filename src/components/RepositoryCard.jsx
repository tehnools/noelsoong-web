import React from 'react'
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
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

export default function RepositoryCard ({ repo }) {
  const classes = useStyles()
  return <Grid item >
    <Card className={classes.card} >
      <CardContent>
        <Typography variant='h6' color='primary' >
          <a className={classes.link} href={repo.url}>
            {repo.name}
          </a>
        </Typography>
        <Typography variant='subtitle1' color='secondary' >
          <a className={classes.link} href={repo.owner.url} >
            {repo.owner.login}
          </a>
        </Typography>
        <Typography variant='subtitle2' color='textSecondary'>
          {repo.primaryLanguage.name}
        </Typography>
        <CardMedia className={classes.gitIcon} href={repo.owner.url} image={repo.owner.avatarUrl} />
      </CardContent>
    </Card>
  </Grid>
}
