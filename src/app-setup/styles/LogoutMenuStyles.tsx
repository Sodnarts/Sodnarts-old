import { createStyles, StyleRules, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme): StyleRules =>
    createStyles({
        button: {
            textTransform: 'none',
            [theme.breakpoints.down(446)]: {
                paddingLeft: '10px',
                paddingRight: '10px',
            },
            [theme.breakpoints.up(446)]: {
                paddingLeft: '25px',
                paddingRight: '25px',
            },
            [theme.breakpoints.up(800)]: {
                paddingLeft: '35px',
                paddingRight: '35px',
            },
        },
        link: {
            height: '100%',
            textDecoration: 'none',
            width: '100%',
        },
        menuItem: {
            '&:hover': {
                color: 'white',
            },
            'color': 'white',
            'textTransform': 'none',
        },
    });
