import { createStyles, Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

export const matchHistoryDisplayerStyles = (theme: Theme): StyleRules =>
    createStyles({
        container: {
            elevation: 5,
            marginTop: '40px',
            transform: 'translateX(20%)',
            width: '70%',
        },
    });
