import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
    createStyles({
        chip: {
            margin: theme.spacing(0.5),
        },
        formControl: {
            marginBottom: '4px',
            minWidth: 120,
        },
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: theme.spacing(0.5),
        },
    });

export { styles };
