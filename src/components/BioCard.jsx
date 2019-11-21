import React from 'react'
import { Card, CardMedia, CardContent, Button, makeStyles, Typography, Box} from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header:{
        fontFamily: 'Roboto',
        fontSize: '2rem',
        fontWeight: 700
    },
    header2: {
        fontFamily: 'Roboto',
        fontSize: '1.7rem',
        fontWeight: 300
    },
    media: {
        height: '360px',
        maxWidth: '360px'
    },
    card: {
        maxWidth: '360px'
    },
    cardContent: {
        display: 'flex',
        flexAlign: 'start'
    }
})



export default function BioCard() {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} title="noelsoong" image='/static/images/hs.jpg' />
            <CardContent >
                <Typography color="primary">
                    <Box className={classes.header} textAlign='left'>
                        Noel Soong
                    </Box>
                    <Box className={classes.header2} textAlign='left'>
                        tehnools
                    </Box>
                </Typography>
            </CardContent>
        </Card>
    )
}
