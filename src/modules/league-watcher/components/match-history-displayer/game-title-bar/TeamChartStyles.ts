import { createStyles, StyleRules, Theme } from '@material-ui/core';

export const teamChartStyles = (theme: Theme): StyleRules =>
    createStyles({
        avatar: {
            marginLeft: '4px',
            [theme.breakpoints.down(550)]: {
                height: '20px',
                width: '20px',
            },
            [theme.breakpoints.up(550)]: {
                height: '24px',
                width: '24px',
            },
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            right: '0px',
        },
        teamRow: {
            display: 'flex',
            flexDirection: 'row',
        },
        timeAgo: {
            flexGrow: 1,
            marginLeft: 'auto',
            marginTop: '-8px',
        },
    });
