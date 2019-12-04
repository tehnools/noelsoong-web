import React from 'react'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import {
  Box,
  Typography,
  makeStyles,
  GridList
} from '@material-ui/core'
import Project from './Project.jsx'

const projects = [
  {
    name: 'Openlaw NZ',
    description: 'Openlaw NZ is a one stop shop for all NZ law.',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/openlawnz.png',
    link: 'https://www.openlaw.nz/',
    github: 'https://github.com/openlawnz/openlawnz-web'
  },
  {
    name: 'Swipable Cards',
    description: 'A Component that handles swipe events.',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/swipablecards.png',
    link: 'https://csb-dm1kh.netlify.com/',
    github: 'https://github.com/tehnools/swipable-cards'
  },
  {
    name: 'Majestic Travels',
    description: 'Majestic Sights Travel provides travel packages and many locations in the south island.',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/majesticsights.png',
    link: 'https://www.majesticsightstravel.com/',
    github: 'https://github.com/justinsoong/majesticsights-marketing'
  }
]

const useStyles = makeStyles(theme => ({
  headerBox:
  {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  header3: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: theme.palette.third.main
  },
  formControl: {
    float: 'right'
  }
}))

function Projects (props) {
  const classes = useStyles()

  const getGridListCols = () => {
    const colWidth = props.width
    if (isWidthUp('xl', colWidth)) {
      return 4
    } else if (isWidthUp('lg', colWidth)) {
      return 3
    } else if (isWidthUp('md', colWidth)) {
      return 2
    }

    return 1
  }

  return (
    <>
      <Box className={classes.headerBox} >
        <Typography
          variant='h3'
          className={classes.header3}>
        Projects

        </Typography>
      </Box>
      <GridList
        cellHeight={180}
        cols={getGridListCols()}
        spacing={1}
      >
        {projects
          .map(
            project =>
              <Project
                key={JSON.stringify(project)}
                project={project} />

          )}
      </GridList>
    </>
  )
}

export default withWidth()(Projects)
