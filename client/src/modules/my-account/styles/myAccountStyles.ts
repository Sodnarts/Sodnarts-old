import { createStyles, Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import { color } from 'src/common/utils/getColor';

export const styles = (theme: Theme): StyleRules =>
    createStyles({
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        drawer: {
            flexShrink: 0,
            position: 'relative',
        },
        drawerPaper: {
            borderRight: `1px solid ${color().secondary}`,
            boxShadow: '5px 0px 6px rgba(0,0,0,0.5)',
            position: 'relative',
            width: '10px',
            [theme.breakpoints.up('xs')]: {
                width: '120px',
            },
            [theme.breakpoints.up('sm')]: {
                // 600
                width: '200px',
            },
            [theme.breakpoints.up('md')]: {
                // 960
                width: '240px',
            },
        },
        list: {
            width: '10px',
            [theme.breakpoints.up('xs')]: {
                width: '120px',
            },
            [theme.breakpoints.up('sm')]: {
                // 600
                width: '200px',
            },
            [theme.breakpoints.up('md')]: {
                // 960
                width: '240px',
            },
        },
        root: {
            display: 'flex',
            minHeight: 'calc(100vh - 65px)',
            position: 'relative',
            zIndex: 500,
        },
    });
