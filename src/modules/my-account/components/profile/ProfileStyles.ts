import { createStyles, StyleRules, Theme } from '@material-ui/core';

export const styles = (theme: Theme): StyleRules =>
    createStyles({
        container: {
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '25px',
            marginTop: '25px',
            minHeight: 'calc(100vh - 150px)',
            paddingBottom: '25px',

            paddingTop: '25px',
            position: 'relative',
            // eslint-disable-next-line
            ['&>*']: {
                marginBottom: '16px',
            },
            [theme.breakpoints.down(960)]: {
                marginLeft: '0px',
                marginRight: '0px',
                paddingLeft: '0px',
                paddingRight: '0px',
            },
            [theme.breakpoints.up(960)]: {
                marginLeft: '25px',
                marginRight: '25px',
                paddingLeft: '50px',
                paddingRight: '50px',
            },
        },
        map: {
            borderRadius: '10px',
            bottom: '25px',
            left: '50%',
            outline: 'block',
            position: 'absolute',
            right: '25px',
            top: '25px',
        },
        textField: {
            marginBottom: '20px',
            [theme.breakpoints.down(960)]: {
                left: '50%',
                marginRight: '0px',
                transform: 'translateX(-50%)',
                width: '70%',
            },
            [theme.breakpoints.up(960)]: {
                left: '0px',
                marginRight: '25px',
                transform: 'translateX(0%)',
                width: '40%',
            },
        },
        textFieldContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            position: 'absolute',
            width: '100%',
        },
    });
