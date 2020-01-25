import { createStyles } from '@material-ui/core';
import { StyleRules, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme): StyleRules =>
    createStyles({
        button: {
            color: 'white',
            fontSize: '20px',
            height: '100%',
            textTransform: 'none',
            [theme.breakpoints.up(380)]: {
                paddingLeft: '10px',
                paddingRight: '10px',
            },
            [theme.breakpoints.up(807)]: {
                paddingLeft: '15px',
                paddingRight: '15px',
                position: 'absolute',
                right: '0px',
                top: '50%',
                transform: 'translateY(-25%)',
            },
        },
        container: {
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 'calc(100vh - 150px)',
            paddingBottom: '25px',
            paddingTop: '25px',
            position: 'relative',
            ['&>*']: {
                marginBottom: '16px',
            },
        },
        paper: {
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            left: '50%',
            marginTop: '25px',
            paddingLeft: '10px',
            paddingRight: '10px',
            position: 'relative',
            transform: 'translateX(-50%)',
            width: '70%',
            [theme.breakpoints.up(807)]: { flexDirection: 'row' },
        }, // 380 to 757
    });
