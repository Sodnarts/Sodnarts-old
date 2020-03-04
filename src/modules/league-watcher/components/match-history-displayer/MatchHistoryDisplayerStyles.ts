import { createStyles, Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

export const matchHistoryDisplayerStyles = (theme: Theme): StyleRules =>
    createStyles({
        container: {
            elevation: 5,
            marginTop: '40px',
            transform: 'translateX(20%)',
            width: '70%',
            [theme.breakpoints.up(800)]: {
                transform: 'translateX(20%)',
                width: '70%',
            },
            [theme.breakpoints.down(800)]: {
                transform: 'translateX(0%)',
                width: '100%',
            },
        },
    });
