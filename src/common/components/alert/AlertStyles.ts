import { createStyles } from '@material-ui/core';
import { StyleRules, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme): StyleRules =>
    createStyles({
        error: {
            backgroundColor: '#000000',
            marginTop: '60px',
        },
        icon: {
            color: '#ffffff',
            height: '20px',
        },
        info: {
            backgroundColor: '#ffffff',
            marginTop: '60px',
        },
        text: {
            color: '#21f516',
        },
    });
