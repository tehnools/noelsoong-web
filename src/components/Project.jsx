import React from 'react'
import {
  GridListTile,
  GridListTileBar,
  Link,
  IconButton,
  makeStyles
} from '@material-ui/core'

import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles(theme => ({
  tileImage: {
    height: '100%',
    width: 300,
    '&:hover': {
      filter: 'grayscale(80%) blur(3px);',
      '-web-kit-filter-': 'grayscale(80%) blur(50%)'
    },
    transition: 'filter 0.5s'
  },
  githubIcon: {
    color: 'white'
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
    <GridListTile>
      <Link href={link}>
        <img
          className={classes.tileImage}
          src={imgUrl}
          alt={name}
        />
      </Link>
      <GridListTileBar
        title={<Link href={link} style={{ color: 'white' }}>{name}</Link>}
        actionIcon={
          <IconButton href={github}>
            <GitHubIcon className={classes.githubIcon} />
          </IconButton>
        }
      />
    </GridListTile>
  )
}
