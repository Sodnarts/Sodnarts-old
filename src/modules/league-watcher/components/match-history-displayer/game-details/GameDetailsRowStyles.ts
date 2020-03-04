import { createStyles, StyleRules, Theme } from '@material-ui/core';

export const gameDetailsRowStyles = (theme: Theme): StyleRules =>
    createStyles({
        championAvatar: {
            margin: 'auto 0',
            [theme.breakpoints.down(550)]: {
                height: '30px',
                width: '30px',
            },
            [theme.breakpoints.up(550)]: {
                height: '36px',
                width: '36px',
            },
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            padding: '4px 16px',
            width: '100%',
        },
        csContainer: {
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto',
        },
        csText: {
            margin: '0 auto',
        },
        iconAndNameContainer: {
            display: 'flex',
            flexDirection: 'row',
            [theme.breakpoints.down(550)]: {
                width: '30%',
            },
            [theme.breakpoints.up(550)]: {
                width: '25%',
            },
        },
        itemsAvatar: {
            margin: 'auto 4px',
            [theme.breakpoints.down(550)]: {
                height: '16px',
                margin: 'auto 2px',
                width: '16px',
            },
            [theme.breakpoints.up(550)]: {
                height: '24px',
                margin: 'auto 4px',
                width: '24px',
            },
        },
        itemsContainer: {
            display: 'flex',
            flexDirection: 'row',
        },

        kdaContainer: {
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto',
        },
        kdaText: {
            margin: '0 auto',
        },
        summonerNameText: {
            margin: 'auto 5px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
        },
        summonerSpells: {
            height: '16px',
            margin: 'auto',
            width: '16px',
        },
        summonerSpellsContainer: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '4px',
        },
    });
