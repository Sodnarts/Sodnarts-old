import { createStyles, Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

export const styles = (theme: Theme): StyleRules =>
    createStyles({
        body: {
            marginBottom: 'auto',
            marginTop: 'auto',
            paddingLeft: '25px',
            paddingRight: '55px',
            position: 'relative',
        },
        button: {
            border: '2px solid',
            color: 'white',
            left: '50%',
            marginTop: '50px',
            paddingLeft: '100px',
            paddingRight: '100px',
            transform: 'translateX(-50%)',
            [theme.breakpoints.down(762)]: {
                paddingLeft: '10px',
                paddingRight: '10px',
            },
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            [theme.breakpoints.up(762)]: {
                flexDirection: 'row',
            },
        },
        paper: {
            height: '100%',
            margin: '0px',
            marginLeft: '20%',
            marginRight: '20%',
            minHeight: 'calc(100vh - 89px)',
            padding: '25px',
            paddingTop: '0px',
            position: 'relative',
            width: '60%',
        },
        subject: {
            fontFamily: 'Times',
            paddingTop: '15px',
            position: 'relative',
            textAlign: 'center',
            width: '100%',
        },
        subjectText: {
            fontSize: '20px',
        },
        text: {
            paddingTop: '25px',
        },
        title: {
            fontFamily: 'Times New Roman',
            textAlign: 'center',
        },
    });
