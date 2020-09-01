import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
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

export default useStyles;