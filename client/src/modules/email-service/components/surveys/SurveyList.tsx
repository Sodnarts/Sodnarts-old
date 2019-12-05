import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { fetchSurveys } from 'src/common/state/actions';
import { SurveyCard } from 'src/modules/email-service/components/surveys/SurveyCard';

const styles = (theme: Theme) =>
    createStyles({
        paper: {
            display: 'grid',
            gridGap: '25px',
            gridTemplateColumns: '1fr',
            margin: '24px auto 24px auto',
            position: 'relative',
            width: '80%',
            [theme.breakpoints.up(650)]: {
                gridTemplateColumns: '1fr 1fr',
                width: '85%',
            },
            [theme.breakpoints.up(1180)]: {
                gridTemplateColumns: '1fr 1fr 1fr',
                width: '75%',
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
        return (
            <div className={this.props.classes.paper}>
                {this.props.surveys.reverse().map((survey: any) => {
                    return (
                        <SurveyCard
                            key={survey._id}
                            title={survey.title}
                            body={survey.body}
                            sentDate={new Date(survey.dateSent).toLocaleDateString()}
                            yes={survey.yes}
                            no={survey.no}
                        />
                    );
                })}
            </div>
        );
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
