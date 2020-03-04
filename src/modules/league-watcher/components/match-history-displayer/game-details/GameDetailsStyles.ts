import { createStyles, StyleRules, Theme } from '@material-ui/core';

export const gameDetailsStyles = (theme: Theme): StyleRules =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        },
        headerContainer: {
            display: 'flex',
            flexDirection: 'row',
            padding: '0 16px',
        },
        headerText: {
            margin: 'auto',
        },
        itemsHeader: {
            margin: 'auto 0',
            [theme.breakpoints.down(550)]: {
                width: '148px',
            },
            [theme.breakpoints.up(550)]: {
                width: '224px',
            },
        },
        winContainer: {
            [theme.breakpoints.down(550)]: {
                width: '30%',
            },
            [theme.breakpoints.up(550)]: {
                width: '25%',
            },
        },
        winText: {
            margin: '0',
            overflow: 'hidden',
            padding: '0',
            textAlign: 'left',
            whiteSpace: 'nowrap',
        },
    });
