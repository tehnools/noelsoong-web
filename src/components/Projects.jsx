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
    name: 'Openlaw NZ',
    description: 'I developed the GraphQL API as well as deployed it in AWS EC2. Still doing contracts for Open Law NZ to improve the development and user experience',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/openlawnz.jpg',
    link: 'https://www.openlaw.nz/',
    github: 'https://github.com/openlawnz/openlawnz-web'
  },
  {
    name: 'Majestic Travels',
    description: 'I have setup a static site to display the information for now but the project will have authorization of users as well as bookings. Plan is to use a tourwriter API',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/majesticsights.jpg',
    link: 'https://www.majesticsightstravel.com/',
    github: 'https://github.com/justinsoong/majesticsights-marketing'
  },
  {
    name: 'Swipable Cards',
    description: 'On my journey to create a tinder application. I created a Component that handles swipe events.',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/swipablecards.jpg',
    link: 'https://csb-dm1kh.netlify.com/',
    github: 'https://github.com/tehnools/swipable-cards'
  },
  {
    name: 'Google Calculator Clone',
    description: 'Remake of google calculator. It\'s pure javascript and css with a history button.',
    imgUrl: 'https://s3-ap-southeast-2.amazonaws.com/noelsoong.com/calculator.jpg',
    link: 'https://tehnools.github.io/calculator/',
    github: 'https://github.com/tehnools/calculator'
  },
  {
    name: 'Minesweeper',
    description: 'Simple Minesweeper game I was tasked to create at Dev Academy. It comes with an unexpected twist.',
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

function Projects (props) {
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
