import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#7c4dff',
    },
    sectionRedes: {
        flexGrow: 1,
        marginTop: 20,
        backgroundColor: '#7c4dff',
    },
    other: {
        flexGrow: 1,
        textAlign: 'center',
        backgroundColor: '#6200ea',
    },
    designBy: {
        flexGrow: 1,
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: '#424242',
    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <div className={classes.sectionRedes}>
                <Grid container>
                    <Box p={1} flexGrow={1}>
                        <Grid item xs>
                            <p>Sigue contectado con nosotros!</p>
                        </Grid>
                    </Box>
                    <Box p={1}>
                        <Grid item xs>
                            <IconButton aria-label="delete" className={classes.margin}>
                                <Facebook></Facebook>
                            </IconButton>
                            <IconButton aria-label="delete" className={classes.margin}>
                                <Instagram></Instagram>
                            </IconButton>
                            <IconButton aria-label="delete" className={classes.margin}>
                                <Twitter></Twitter>
                            </IconButton>
                        </Grid>
                    </Box>
                </Grid>
            </div>
            <Divider light />
            <div className={classes.other}>
                <Grid container alignItems="center" justify="center">
                    <Grid item xs={6} sm={3}>
                        <p>hola</p>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <p>hola</p>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <p>hola</p>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <p>hola</p>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.designBy}>
                <Grid container alignItems="center" justify="center">
                    <Grid item xs={6} sm={3}>
                        <p>Design By: www.webmasterpanama.com</p>
                    </Grid>
                </Grid>
            </div>
        </footer>
    );
}