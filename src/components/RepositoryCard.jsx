import React from 'react'
import {
  makeStyles,
  Grid,
  Card,
  Link,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    '&:visited': {
      color: theme.palette.secondary.main
    },
    '&:hover': {
      color: theme.palette.secondary.light
    }
  },
  card: {
    display: 'flex',
    minWidth: 250,
    padding: theme.spacing(2)
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
      <Link href={repo.owner.url}>
        <CardMedia className={classes.gitIcon} image={repo.owner.avatarUrl} />
      </Link>
    </Card>
  </Grid>
}
