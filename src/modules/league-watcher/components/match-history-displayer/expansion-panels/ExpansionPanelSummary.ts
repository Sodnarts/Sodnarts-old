import { withStyles } from '@material-ui/core';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const ExpansionPanelSummary = withStyles({
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
    root: {
        '&$expanded': {
            minHeight: 56,
        },
        'backgroundColor': 'rgba(0, 0, 0, .03)',
        'borderBottom': '1px solid rgba(0, 0, 0, .125)',
        'marginBottom': -1,
        'minHeight': 56,
    },
})(MuiExpansionPanelSummary);

export { ExpansionPanelSummary };
