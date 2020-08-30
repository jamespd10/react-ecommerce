import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Joker from '../../assets/image/joker.jpg';
import Lobo from '../../assets/image/lobo-dota.jpg';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    desk: {
        height: '400px',
        /*['@media (max-width:775px)']: {
            height: '250px'
        }*/
    },
    mobile: {
        height: '250px',
    }
}));

export default function CarouselF() {
    const matches = useMediaQuery('(max-width:775px)');
    const classes = useStyles();
    return (
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000} showStatus={false}>
            <div>
                <img src={Joker} className={matches? classes.mobile: classes.desk} alt="imagen" />
            </div>
            <div>
                <img src={Lobo} className={matches? classes.mobile: classes.desk} alt="imagen" />
            </div>
        </Carousel>
    );
}