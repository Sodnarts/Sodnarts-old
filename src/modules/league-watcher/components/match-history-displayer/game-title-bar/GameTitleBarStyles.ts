import { createMuiTheme, createStyles, StyleRules, Theme } from '@material-ui/core';

export const gameTitleBarStyles = (theme: Theme): StyleRules =>
    createStyles({
        championAvatar: {
            margin: 'auto',
            marginLeft: '50px',
            [theme.breakpoints.down(550)]: {
                height: '48px',
                width: '48px',
            },
            [theme.breakpoints.up(550)]: {
                height: '64px',
                width: '64px',
            },
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            flexGrow: 1,
        },
        kdaContainer: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 2,
            margin: 'auto',
            marginLeft: '5px',
        },
        kdaText: {
            margin: '0px',
            [theme.breakpoints.down(550)]: {
                fontSize: '14',
            },
            [theme.breakpoints.up(550)]: {
                fontSize: '22',
            },
        },
        mapAndModeContainer: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 'auto',
            marginTop: 'auto',
            [theme.breakpoints.down(550)]: {
                width: '10%',
            },
            [theme.breakpoints.up(550)]: {
                width: '15%',
            },
        },
        mapAndModeText: {
            margin: '0px',
            whiteSpace: 'nowrap',
            [theme.breakpoints.down(550)]: {
                fontSize: 14,
            },
            [theme.breakpoints.up(550)]: {
                fontSize: 16,
            },
        },
        summonerSpells: {
            marginBottom: '2px',
            marginTop: '2px',
            [theme.breakpoints.down(550)]: {
                height: '20px',
                width: '20px',
            },
            [theme.breakpoints.up(550)]: {
                height: '30px',
                width: '30px',
            },
        },
        summonerSpellsContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '12px',
        },
    });

export const typographyTheme = createMuiTheme();

typographyTheme.typography.h6 = {
    fontSize: 18,
    [typographyTheme.breakpoints.down(550)]: {
        fontSize: 14,
    },
    [typographyTheme.breakpoints.up(550)]: {
        fontSize: 18,
    },
};

typographyTheme.typography.body1 = {
    fontSize: 16,
    [typographyTheme.breakpoints.down(550)]: {
        fontSize: 12,
    },
    [typographyTheme.breakpoints.up(550)]: {
        fontSize: 16,
    },
};
