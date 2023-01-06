import { makeStyles } from '@mui/material/styles';

const useBasketStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '250px',
    },
    // Media query for small screens
    [theme.breakpoints.down('sm')]: {
        root: {
            // Styles for small screens
        },
    },
    // Media query for medium screens
    [theme.breakpoints.between('sm', 'md')]: {
        root: {
            // Styles for medium screens
        },
    },
}));

export default useBasketStyles;
