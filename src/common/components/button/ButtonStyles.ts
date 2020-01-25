import { createStyles } from '@material-ui/core';
import { StyleRules, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme): StyleRules =>
    createStyles({
        button: {
            color: 'white',
            fontSize: '20px',
            right: '0px',
            textTransform: 'none',
            [theme.breakpoints.up(380)]: {
                paddingLeft: '10px',
                paddingRight: '10px',
            },
            [theme.breakpoints.up(807)]: {
                float: 'right',
                paddingLeft: '15px',
                paddingRight: '15px',
            },
        },
    });
