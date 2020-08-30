import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        bottom: '23px',
        right: '28px',
        zIndex: 100,
        position: "fixed"
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function IconFloat() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Badge badgeContent={4} color="primary">
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Badge>
        </div>
    );
}