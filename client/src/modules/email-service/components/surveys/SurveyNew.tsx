import { Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { SurveyForm } from 'src/modules/email-service/components/surveys/SurveyForm';
import { SurveyFormReview } from 'src/modules/email-service/components/surveys/SurveyFormReview';

/**
 * Creates a new survey, using SurveyForm and SurveyFormReview
 *
 * @class SurveyNew
 * @extends {React.Component}
 */
class SurveyNewBase extends React.Component<InjectedFormProps> {
    public lang = getLanguageFile();

    public state = {
        titleText: this.lang.surveys.formTitle.createSurvey,
        toggleFormReview: false,
    };

    public handleCancel = () => {
        this.setState({ toggleFormReview: false, titleText: this.lang.surveys.formTitle.createSurvey });
    };

    public handleSubmit = () => {
        this.setState({ toggleFormReview: true, titleText: this.lang.surveys.formTitle.reviewSurvey });
    };

    public renderContent() {
        if (this.state.toggleFormReview) {
            return <SurveyFormReview onCancel={this.handleCancel} />;
        }
        return <SurveyForm onSurveySubmit={this.handleSubmit} />;
    }

    public render() {
        return (
            <div style={{ position: 'relative' }}>
                <Dialog open={true} aria-labelledby="form-dialog-title">
                    <Typography
                        variant="subtitle1"
                        style={{ padding: '10px', textAlign: 'center' }}
                        id="form-dialog-title"
                    >
                        {this.state.titleText}
                    </Typography>
                    <DialogContent>{this.renderContent()}</DialogContent>
                </Dialog>
            </div>
        );
    }
}

const SurveyNew = reduxForm({
    form: 'surveyForm',
})(SurveyNewBase);

export { SurveyNew };
