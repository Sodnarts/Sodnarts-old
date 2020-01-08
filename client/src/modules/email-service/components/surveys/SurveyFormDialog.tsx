import { Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import React from 'react';
import { connect } from 'react-redux';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import * as actions from 'src/common/state/actions';
import { SurveyForm } from 'src/modules/email-service/components/surveys/SurveyForm';

interface IProps {
    submitSurvey: (survey: any) => void;
    showAlert: (message: string) => void;
    handleOpen: () => void;
}

/**
 * Creates a new survey, using SurveyForm and SurveyFormReview
 *
 * @class SurveyNew
 * @extends {React.Component}
 */
const SurveyFormDialogBase = ({ handleOpen, showAlert, submitSurvey }: IProps) => {
    const lang = getLanguageFile();

    const handleSubmit = (survey: any) => {
        submitSurvey(survey);
        handleOpen();
    };

    const handleCancelForm = () => {
        handleOpen();
    };

    return (
        <div style={{ position: 'relative' }}>
            <Dialog open={true} aria-labelledby="form-dialog-title">
                <Typography variant="subtitle1" style={{ padding: '10px', textAlign: 'center' }} id="form-dialog-title">
                    {lang.surveys.formTitle.createSurvey}
                </Typography>
                <DialogContent>
                    <SurveyForm onSurveySubmit={handleSubmit} handleCancel={handleCancelForm} />
                </DialogContent>
            </Dialog>
        </div>
    );
};

const SurveyFormDialog = connect(null, actions)(SurveyFormDialogBase);
export { SurveyFormDialog };
