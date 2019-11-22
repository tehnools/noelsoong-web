import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  makeStyles,
  Typography,
  Box
} from '@material-ui/core'
import BioActions from './BioActions'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'
const useStyles = makeStyles(theme => ({
  header: {
    fontFamily: 'Roboto',
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: '2.1rem'
  },
  header2: {
    fontFamily: 'Roboto',
    fontSize: '1.7rem',
    lineHeight: '2rem',
    fontWeight: 300
  },
  location: {
    marginTop: '1rem',
    lineHeight: '1.2rem',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    justifyXontent: 'center',
    flexDirection: 'column',
    fontWeight: 300
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
      <CardMedia
        className={classes.media}
        title="noelsoong"
        image='/static/images/hs.jpg'
      />
      <CardContent>
        <Typography color="primary" component='div'>
          <Box className={classes.header} textAlign='left'>
              NOEL SOONG
          </Box>
          <Box className={classes.header2} textAlign='left'>
              tehnools
          </Box>
        </Typography>
        <Typography component='div'>
          <Box className={classes.location} textAlign='left'>
            <RoomOutlinedIcon style={{ fontSize: '1rem', color: 'grey' }} /> Auckland, New Zealand
          </Box>
        </Typography>
        <BioActions />
      </CardContent>

    </Card>
  )
}
