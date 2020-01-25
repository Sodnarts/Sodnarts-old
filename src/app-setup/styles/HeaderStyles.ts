import { Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';

export const styles = (theme: Theme): StyleRules =>
    createStyles({
        logoutButton: {
            alignSelf: 'right',
            marginLeft: '160px',
            position: 'relative',
            right: '0px',
        },
        menuButton: {
            marginRight: '20px',
        },
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
        toolbar: {
            alignContent: 'right',
            position: 'relative',
            width: '100%',
        },
    });
