import React from 'react'
import {
  Card,
  CardContent,
  makeStyles,
  Typography,
  Box
} from '@material-ui/core'
import BioActions from './BioActions.jsx'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'

const useStyles = makeStyles(theme => ({
  header: {
    fontFamily: 'Roboto',
    fontWeight: 700
  },
  header2: {
    fontFamily: 'Roboto',
    lineHeight: '1em',
    fontWeight: 300
  },
  contactDetails: {
    margin: '0.75rem 0 0 0'
  },
  information: {
    display: 'flex',
    padding: '0.25rem 0 0.25rem 0',
    lineHeight: '1rem',
    fontFamily: 'Roboto',
    textOverflow: 'wrap',
    fontWeight: 300
  },
  icon: {
    fontSize: '1rem',
    color: 'grey',
    marginRight: '0.5rem'
  },
  media: {
    width: '100%',
    height: 325
  },
  cardContent: {
    display: 'flex',
    flexAlign: 'start'
  },
  buttonActions: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 0,
    marginTop: '1rem'
  },
  buttonThird: {
    backgroundColor: theme.palette.third.main,
    color: 'white',
    marginLeft: 0,
    marginBottom: theme.spacing(1)
  }
}))

export default function BioCard () {
  const classes = useStyles()
  return (
    <Card className={classes.card} shadow={1} >
      <CardContent>
        <Typography variant='h2' color="primary" component='div'>
          <Box className={classes.header} textAlign='left'>
              NOEL SOONG
          </Box>
        </Typography>
        <Typography variant='h3' color="primary" component='div'>
          <Box className={classes.header2} textAlign='left'>
              tehnools
          </Box>
        </Typography>
        <Typography component='div' variant='body1' className={classes.contactDetails}>
          <Box className={classes.information} textAlign='left'>
            <RoomOutlinedIcon className={classes.icon} /> Auckland, New Zealand
          </Box>
          <Box className={classes.information} textAlign='left'>
            <EmailOutlinedIcon className={classes.icon} /> noelsoongdev@gmail.com</Box>
        </Typography>
        <BioActions />
      </CardContent>

    </Card>
  )
}
