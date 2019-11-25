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
    padding: theme.spacing(2),
    border: '1px solid #e6e6e6',
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  content: {
    flex: '1 0 auto',
    padding: 0
  },
  gitIcon: {
    height: 30,
    width: 30
  }
}))

export default function RepositoryCard ({ repo }) {
  const classes = useStyles()
  return <Grid item >
    <Card className={classes.card} >
      <CardContent className={classes.content} >
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
      </CardContent>
      <CardMedia className={classes.gitIcon} href={repo.owner.url} image={repo.owner.avatarUrl} />
    </Card>
  </Grid>
}
