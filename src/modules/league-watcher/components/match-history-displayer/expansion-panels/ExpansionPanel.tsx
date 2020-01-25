import { withStyles } from '@material-ui/core';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';

const ExpansionPanel = withStyles({
    expanded: {},
    root: {
        '&$expanded': {
            margin: 'auto',
        },
        '&:before': {
            display: 'none',
        },
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        'border': '1px solid rgba(0, 0, 0, .125)',
        'boxShadow': 'none',
    },
})(MuiExpansionPanel);

export { ExpansionPanel };
