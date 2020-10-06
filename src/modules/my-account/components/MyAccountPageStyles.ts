import { createStyles, StyleRules, Theme } from '@material-ui/core';

export const myAccountPageStyles = (theme: Theme): StyleRules =>
    createStyles({
        componentContainer: {
            display: 'block',
            position: 'relative',
            width: '100%',
            [theme.breakpoints.down(960)]: {
                marginLeft: '0px',
            },
            [theme.breakpoints.up(960)]: {
                marginLeft: '4%',
            },
        },
        container: {
            display: 'flex',
            position: 'relative',
            [theme.breakpoints.down(960)]: {
                width: '100%',
            },
            [theme.breakpoints.up(960)]: {
                width: '96%',
            },
        },
    });
