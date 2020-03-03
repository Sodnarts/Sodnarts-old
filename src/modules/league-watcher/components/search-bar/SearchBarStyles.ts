import { createStyles, Theme } from '@material-ui/core';

export const styles = (theme: Theme) =>
    createStyles({
        favoriteIcon: {
            alignSelf: 'center',
            marginRight: '20px',
        },
        favoritesList: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100vw',
        },
        input: {
            marginLeft: '50px',
            paddingBottom: '5px',
            paddingRight: '50px',
            paddingTop: '5px',
            position: 'relative',
            width: '90%',
        },
        search: {
            border: '1px solid black',
            borderRadius: '50px',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '25px',
            position: 'relative',
            transform: 'translateX(10%)',
            width: '80%',
        },
        searchIcon: {
            alignItems: 'center',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            pointerEvents: 'none',
            position: 'absolute',
            width: theme.spacing(7),
        },
    });
