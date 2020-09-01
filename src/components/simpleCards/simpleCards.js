import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Twitter from '@material-ui/icons/Twitter';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles((theme) =>({
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
    cardHeader: {
        textAlign: 'center',
    },
    iconSize: {
        fontSize: 100,
    }
  }));

export default function SimpleCards() {

    const classes = useStyles();

    function Cards(){
        return (
            <Card className={classes.root}>
                <CardHeader title={<Twitter className={classes.iconSize} />} className={classes.cardHeader} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
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
                    <Grid item xs>
                        <Cards></Cards>
                    </Grid>
                    <Grid item xs>
                        <Cards></Cards>
                    </Grid>
                </Grid>
            </div>
        </Container>
      </React.Fragment>
      );
}