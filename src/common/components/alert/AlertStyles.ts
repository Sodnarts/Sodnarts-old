import { createStyles } from '@material-ui/core';
import { StyleRules, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme): StyleRules =>
    createStyles({
        icon: {
            color: '#ffffff',
            height: '20px',
        },
        text: {
            color: '#21f516',
        },
        info: {
            backgroundColor: '#ffffff',
            marginTop: '60px',
        },
        error: {
            backgroundColor: '#000000',
            marginTop: '60px',
        },
    });
