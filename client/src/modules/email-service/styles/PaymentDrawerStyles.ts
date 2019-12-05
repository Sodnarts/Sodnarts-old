import { createStyles, Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

export const styles = (theme: Theme): StyleRules =>
    createStyles({
        button: {
            '&:focus': {
                backgroundColor: 'transparent',
            },
            '&:hover': {
                backgroundColor: 'transparent',
            },
            'backgroundColor': 'transparent',
            'color': 'white',
            'marginTop': '8px',
            'padding': '0px',
            'textTransform': 'none',
        },
        container: {
            zIndex: 3000,
        },
        drawerClose: {
            right: '0px',
            width: '20px',
        },
        paper: {
            display: 'block',
            maxWidth: '100vw',
            width: '300x',
            [theme.breakpoints.up(768)]: {
                width: '400px',
            },
            [theme.breakpoints.up(1600)]: {
                width: '600px',
            },
        },
    });
