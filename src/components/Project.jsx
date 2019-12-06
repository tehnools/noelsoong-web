import React from 'react'
import {
  Card,
  CardMedia,
  CardHeader,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Link,
  IconButton,
  makeStyles
} from '@material-ui/core'

import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 300,
    maxWidth: 366
  },
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
})
)

export default function Project (props) {
  const classes = useStyles()
  const {
    name,
    description,
    imgUrl,
    link,
    github
  } = props.project
  return (
    <Card
      className={classes.root}
    >
      <CardHeader
        title={name}
      />
      <CardActionArea
        href={link}
      >
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title={name}
        />
      </CardActionArea>
      <CardContent className={classes.content}>
        <Typography variant='body1'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton href={github}>
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
