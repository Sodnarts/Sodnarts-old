import { createStyles, Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

export const styles = (theme: Theme): StyleRules =>
    createStyles({
        card: {
            minWidth: '275px',
            position: 'relative',
            [theme.breakpoints.down('md')]: {
                width: '100%',
            },
            [theme.breakpoints.up('md')]: {
                width: '40',
            },
        },
        cardAction: {
            color: '#ffab40',
            margin: 0,
            marginLeft: '16px',
        },
        cardContainer: {},
        cardContent: {
            paddingTop: '25px',
        },
        cardResponse: {
            backgroundColor: '#607d8b',
            height: '35px',
        },
        cardTitle: {
            fontSize: 18,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    });
