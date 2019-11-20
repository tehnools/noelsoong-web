import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { Card, CardMedia, CardContent, Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({

})



export default function BioCard() {
    const theme = useContext(ThemeContext)
    const classes = useStyles()
    return (
        <Card>
            <CardMedia title="" image="/hs.jpg" />
            <CardContent>
                <Typography>
                    Noel Soong
                </Typography>
                <Typography>
                    tehnools
                </Typography>
            </CardContent>
        </Card>
    )
}
