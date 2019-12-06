import React from 'react'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import {
  Box,
  Typography,
  makeStyles,
  Collapse,
  FormControlLabel,
  Switch,
  Grid
} from '@material-ui/core'
import Project from './Project.jsx'

const projects = [
  {
    name: 'Openlaw NZ',
    description: 'Openlaw NZ is a one stop shop for all NZ law.',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/openlawnz.jpg',
    link: 'https://www.openlaw.nz/',
    github: 'https://github.com/openlawnz/openlawnz-web'
  },
  {
    name: 'Swipable Cards',
    description: 'A Component that handles swipe events.',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/swipablecards.jpg',
    link: 'https://csb-dm1kh.netlify.com/',
    github: 'https://github.com/tehnools/swipable-cards'
  },
  {
    name: 'Majestic Travels',
    description: 'Provides travel packages and many locations in the south island.',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/majesticsights.jpg',
    link: 'https://www.majesticsightstravel.com/',
    github: 'https://github.com/justinsoong/majesticsights-marketing'
  },
  {
    name: 'Google Calculator Clone',
    description: 'Remake of google calculator',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/calculator.jpg',
    link: 'https://tehnools.github.io/calculator/',
    github: 'https://github.com/tehnools/calculator'
  },
  {
    name: 'Minesweeper',
    description: 'Simple Minesweeper game',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/minesweeper.jpg',
    link: 'https://tehnools.github.io/minesweeper/',
    github: 'https://github.com/tehnools/minesweeper'
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
    paddingLeft: theme.spacing(2)
  }
}))

function Projects (props) {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(true)
  const handleChecked = () => {
    setChecked(prev => !prev)
  }
  return (
    <>
      <Box className={classes.headerBox} >
        <Typography
          variant='h3'
          className={classes.header3}>
        Projects
          <FormControlLabel
            className={classes.formControl}
            control={<Switch checked={!checked}
              onChange={handleChecked} />}
            label={checked ? 'Hide' : 'Show'}
          />
        </Typography>
      </Box>
      <Grid
        container
        alignItems='flex-start'
        wrap='wrap'
        xl='auto'
        md={3}
        spacing={1}
      >
        {projects
          .map(
            project =>
              <Grid
                item
                key={JSON.stringify(project)}
              >
                <Collapse
                  mountOnEnter
                  unmountOnExit
                  in={checked}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(checked ? { timeout: 1000 } : {})}
                >
                  <Grid
                    item
                  >
                    <Project
                      project={project} />
                  </Grid>
                </Collapse>
              </Grid>
          )}
      </Grid>
    </>
  )
}

export default withWidth()(Projects)
