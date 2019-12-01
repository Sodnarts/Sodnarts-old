import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { fetchSurveys } from 'src/common/state/actions';
import { color } from 'src/common/utils/getColor';

const styles = (theme: Theme) =>
    createStyles({
        paper: {
            position: 'relative',
            width: '100%',
            [theme.breakpoints.down('md')]: {
                width: '100%',
            },
            [theme.breakpoints.up('md')]: {
                width: '40',
            },
        },
    });
interface IProps {
    fetchSurveys: () => void;
    surveys: [];
}

type ISurveyList = IProps & WithStyles<typeof styles>;

class SurveyListBase extends React.Component<ISurveyList> {
    private lang = getLanguageFile();

    public componentDidMount() {
        this.props.fetchSurveys();
    }

    public renderSurveys = () => {
        return this.props.surveys.reverse().map((survey: any) => {
            return (
                <div className={this.props.classes.paper + ' col m4'} key={survey._id}>
                    <div style={{ position: 'relative' }} className="card darken-3">
                        <div
                            style={{ position: 'relative', backgroundColor: color().primary }}
                            className="card-content"
                        >
                            <span className="card-title" style={{ color: color().secondaryText }}>
                                {survey.title}
                            </span>
                            <p style={{ color: color().secondaryText }}>{survey.body}</p>
                            <p style={{ color: color().secondaryText }}>
                                {this.lang.surveys.card.sent} {new Date(survey.dateSent).toLocaleDateString()}
                            </p>
                        </div>
                        <div style={{ position: 'relative' }} className="card-action blue-grey darken-1">
                            <a>
                                {this.lang.surveys.card.yes} {survey.yes}
                            </a>
                            <a>
                                {this.lang.surveys.card.no}
                                {survey.no}
                            </a>
                        </div>
                    </div>
                </div>
            );
        });
    };

    public render() {
        return (
            <div style={{ position: 'relative' }} className="row">
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({ surveys }: any) {
    return { surveys };
}

const SurveyList = connect(mapStateToProps, { fetchSurveys })(withStyles(styles)(SurveyListBase));

export { SurveyList };
