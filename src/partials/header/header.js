import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoboHeader from '../../assets/image/lobo.png';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    imgHeader: {
        width: 100,
        height: 70,
    },
    icons: {
        marginLeft: 'auto'
    },
    headerLinks: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'column',
        },
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <Box display="flex" p={1} justifyContent="center">
            <Grid container alignItems="center" justify="center">
                <Box flexGrow={1}>
                    <Grid item xs>
                        <Link to="/">
                            <img src={LoboHeader} className={classes.imgHeader} alt="logo" />
                        </Link>
                    </Grid>
                </Box>
                <Box flexGrow={1}>
                    <Grid item xs className={classes.headerLinks}>
                        <Button size="small" color="primary">
                            Quienes somos
                            </Button>
                        <Button size="small" color="primary">
                            Contacto
                            </Button>
                        <Button size="small" color="primary">
                            Productos
                            </Button>
                        <Button size="small" color="primary">
                            Servicios
                            </Button>
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
        </Box>
    );
}