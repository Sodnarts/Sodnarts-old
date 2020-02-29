import { createStyles } from '@material-ui/core';
import { StyleRules, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme): StyleRules =>
    createStyles({
        error: {
            backgroundColor: '#000000',
            marginTop: '60px',
        },
        iconError: {
            color: '#ffffff',
            height: '20px',
        },
        iconInfo: {
            color: '#777777',
            height: '20px',
        },
        info: {
            backgroundColor: '#ffffff',
            marginTop: '60px',
        },
        textError: {
            color: '#21f516',
        },
        textInfo: {
            color: '#32a852',
        },
    });
