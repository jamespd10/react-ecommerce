import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import PhoneEnabledRoundedIcon from '@material-ui/icons/PhoneEnabledRounded';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#7c4dff',
    },
    sectionRedes: {
        flexGrow: 1,
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#7c4dff',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        },
    },
    other: {
        flexGrow: 1,
        backgroundColor: '#6200ea',
        padding: 10,
    },
    designBy: {
        flexGrow: 1,
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: '#424242',
    },
    iconRedes: {
        color: '#fff',
    },
    textCenterDiv: {
        textAlign: 'center'
    },
    gridNames: {
        padding: 20
    },
    pMayus: {
        textTransform: 'uppercase',
    },
    hrTextFooter: {
        width: '50%',
        float: 'left',
        color: '#fff',
        backgroundColor: '#fff',
        borderTop: '1px | solid | red',
    },
    formInputFooter: {
        marginTop: 15
    },
    textBreakFooter: {
        wordWrap: 'break-word',
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <div className={classes.sectionRedes}>
                <Grid container alignItems="center" justify="center">
                    <Box p={1} flexGrow={1}>
                        <Grid item xs>
                            <p>Sigue contectado con nosotros!</p>
                        </Grid>
                    </Box>
                    <Box p={1}>
                        <Grid item xs>
                            <IconButton aria-label="delete" className={classes.iconRedes}>
                                <Facebook></Facebook>
                            </IconButton>
                            <IconButton aria-label="delete" className={classes.iconRedes}>
                                <Instagram></Instagram>
                            </IconButton>
                            <IconButton aria-label="delete" className={classes.iconRedes}>
                                <Twitter></Twitter>
                            </IconButton>
                        </Grid>
                    </Box>
                </Grid>
            </div>
            <Divider light />
            <div className={classes.other}>
                <Grid container>
                    <Grid item xs={12} sm={3} className={classes.gridNames}>
                        <p className={classes.pMayus}>Sobre nosotros!</p>
                        <hr className={classes.hrTextFooter}/><br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil veritatis sint illum recusandae praesentium nulla mollitia, voluptates aut provident placeat, laboriosam fugit repudiandae possimus voluptas quod vel cupiditate obcaecati!</p>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.gridNames}>
                        <p className={classes.pMayus}>Productos</p>
                        <hr className={classes.hrTextFooter}/><br/>
                        <p>producto 1</p>
                        <p>producto 2</p>
                        <p>producto 3</p>
                        <p>producto 4</p>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.gridNames}>
                        <p className={classes.pMayus}>Suscríbete</p>
                        <hr className={classes.hrTextFooter}/><br/>
                        <form noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Correo" variant="outlined" className={classes.formInputFooter} fullWidth={true} />
                            <Button variant="contained" color="secondary" className={classes.formInputFooter} fullWidth={true}>
                                Enviar
                            </Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.gridNames}>
                        <p className={classes.pMayus}>Contacto</p>
                        <hr className={classes.hrTextFooter}/><br/>
                        <p className={classes.textBreakFooter}><HomeRoundedIcon/> Brisas del Golf, Centro Comercial Galería Village, San Miguelito</p>
                        <p className={classes.textBreakFooter}><MailRoundedIcon/> info@tiendapanama.com</p>
                        <p className={classes.textBreakFooter}><PhoneEnabledRoundedIcon/> +507 6620-8399</p>
                        <p className={classes.textBreakFooter}><WatchLaterRoundedIcon/> Lunes a viernes 8:00 a.m. a 4:00 p.m.</p>
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