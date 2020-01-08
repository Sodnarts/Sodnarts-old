import { createStyles } from '@material-ui/core';
import { StyleRules, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme): StyleRules =>
    createStyles({
        icon: {
            color: '#ffffff',
            height: '20px',
        },
        margin: {
            marginTop: '60px',
        },
        text: {
            color: '#21f516',
        },
    });
