import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Joker from '../../assets/image/joker.jpg';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 140,
    },
    container: {
        marginTop: 20
    },
    grid: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Categorias() {

    const classes = useStyles();

    function Cards() {
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={Joker} title="Contemplative Reptile" alt="imagen" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Ver
                </Button>
                </CardActions>
            </Card>
        );
    }

    return (
        <React.Fragment>
            <Container maxWidth="xl" className={classes.container}>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Cards></Cards>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
}