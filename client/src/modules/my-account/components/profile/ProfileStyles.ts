import { createStyles, Theme } from '@material-ui/core';

export const styles = (theme: Theme) =>
    createStyles({
        container: {
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            margin: '25px',
            minHeight: 'calc(100vh - 150px)',
            paddingBottom: '25px',
            paddingLeft: '50px',
            paddingRight: '50px',
            paddingTop: '25px',
            position: 'relative',
            ['&>*']: {
                marginBottom: '16px',
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
    });
