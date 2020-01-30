import React from 'react'
import withWidth from '@material-ui/core/withWidth'
import {
  Box,
  Typography,
  makeStyles,
  Collapse,
  FormControlLabel,
  Switch,
  Grid,
  Divider
} from '@material-ui/core'
import Project from './Project.jsx'

const projects = [
  {
    name: 'Swim Safe',
    description: 'Developing a mobile application that will will inform swimmers of water hazards around Auckland\'s waters.',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/swimsafe_s9.jpg',
    link: 'https://play.google.com/store/apps/details?id=com.noelsoong.swimsafe',
    github: 'https://github.com/tehnools/swimsafe',
    isPlayStore: true
  },
  {
    name: 'Openlaw NZ',
    description: 'Open Law NZ is an opensource research platform with over 33 thousand cases and riseing. I am developing to improve the backend and frontend using Node, GraphQL and .NET.',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/openlawnz.jpg',
    link: 'https://www.openlaw.nz/',
    github: 'https://github.com/openlawnz/openlawnz-web'
  },
  {
    name: 'Majestic Travels',
    description: 'Developing a tour booking site for Majestic Travels to allow users to select tour packages around New Zealand and book them.',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/majesticsights.jpg',
    link: 'https://www.majesticsightstravel.com/',
    github: 'https://github.com/justinsoong/majesticsights-marketing'
  },
  {
    name: 'Swipable Cards',
    description: 'Developing a React Web module for developers to handle swipe events both web and mobile devices.',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/swipablecards.jpg',
    link: 'https://csb-dm1kh.netlify.com/',
    github: 'https://github.com/tehnools/swipable-cards'
  },
  {
    name: 'Google Calculator Clone',
    description: 'Remake of the Google Calculator with history to allow users to view old calculations.',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/calculator.jpg',
    link: 'https://tehnools.github.io/calculator/',
    github: 'https://github.com/tehnools/calculator'
  },
  {
    name: 'Minesweeper',
    description: 'MineSweeper game that has a difficulty selector. It has an interesting twist when you loose.',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/minesweeper.jpg',
    link: 'https://tehnools.github.io/minesweeper/',
    github: 'https://github.com/tehnools/minesweeper'
  }
]

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  hidden: {
    display: 'none'
  },
  gridItem: {
    paddingTop: theme.spacing(1)
  },
  headerBox:
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  header3: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: theme.palette.third.main
  },
  hr: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  }
}))

function Projects () {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(true)
  const handleChecked = () => {
    setChecked(prev => !prev)
  }
  return (
    <Box className={classes.root}>
      <Box className={classes.headerBox} >
        <Typography
          variant='h3'
          className={classes.header3}>
        Projects
        </Typography>
        <FormControlLabel
          className={classes.formControl}
          control={<Switch checked={!checked}
            onChange={handleChecked} />}
          label={checked ? 'Hide' : 'Show'}
        />
      </Box>
      <Grid
        container
        direction={'row'}
        spacing={1}
      >
        {projects
          .map(
            project =>
              <Grid
                key={JSON.stringify(project)}
                item
                xs={12}
                sm={12}
                lg={4}
                md={4}
              >
                <Collapse
                  mountOnEnter
                  unmountOnExit
                  in={checked}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(checked ? { timeout: 1000, classname: classes.hidden } : {})}
                >
                  <Grid
                    item
                    className={classes.gridItem}
                  >
                    <Project
                      project={project} />
                  </Grid>
                </Collapse>
              </Grid>
          )}
      </Grid>
      <Divider className={classes.hr} />
    </Box>
  )
}

export default withWidth()(Projects)
