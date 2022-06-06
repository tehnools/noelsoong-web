import React from 'react'
import {
  Card,
  CardMedia,
  CardHeader,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  makeStyles
} from '@material-ui/core'

import GitHubIcon from '@material-ui/icons/GitHub'
import ShopIcon from '@material-ui/icons/Shop'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 300,
    width: '100%',
    '&:hover': {
      cursor: 'pointer'
    },
    transition: 'filter 0.3s'
  },
  githubIcon: {
    color: 'white'
  },
  gridListTileBar: { color: 'white' },
  content: {
    height: 100,
    wordWrap: 'break-word'
  }
}))

export default function Project(props) {
  const classes = useStyles()
  const { name, description, imgUrl, link, github, isPlayStore } = props.project
  return (
    <Card className={classes.root}>
      <CardHeader title={name} />
      <CardActionArea href={link}>
        <CardMedia className={classes.media} image={imgUrl} title={name} />
      </CardActionArea>
      <CardContent className={classes.content}>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton href={github}>
          <GitHubIcon />
        </IconButton>
        {isPlayStore ? (
          <IconButton href={link}>
            <ShopIcon />
          </IconButton>
        ) : null}
      </CardActions>
    </Card>
  )
}
