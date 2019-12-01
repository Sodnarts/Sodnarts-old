import { Divider, Typography } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import * as actions from 'src/common/state/actions';
import { color } from 'src/common/utils/getColor';
import { formFields } from 'src/modules/email-service/components/surveys/formFields';

const SurveyFormReviewBase = ({ onCancel, formValues, submitSurvey, history }: any) => {
    const lang = getLanguageFile();
    const fields = formFields(lang);
    const fieldList = _.map(fields, ({ name, label }) => {
        return (
            <div style={{ paddingBottom: '20px' }} key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
                <Divider />
            </div>
        );
    });

    const handleSubmit = () => {
        submitSurvey(formValues, history);
    };

    return (
        <div>
            <Typography style={{ marginBottom: '10px' }} variant="body2">
                {lang.surveys.formTitle.confirm}
            </Typography>
            {fieldList}
            <button
                style={{
                    backgroundColor: color().primary,
                    borderRadius: '50px',
                    color: color().text,
                    fontSize: '14px',
                    marginRight: '8px',
                }}
                className="btn left"
                onClick={onCancel}
            >
                {lang.surveys.form.button.back}
                <i style={{ fontSize: '25px', marginRight: '5px' }} className="material-icons left">
                    chevron_left
                </i>
            </button>
            <button
                style={{ color: color().text, borderRadius: '50px', fontSize: '14px' }}
                className="green darken-2 btn right"
                onClick={handleSubmit}
            >
                {lang.surveys.form.button.submit}
                <i style={{ marginLeft: '5px' }} className="material-icons right">
                    done
                </i>
            </button>
        </div>
    );
};

function mapStateToProps(state: any) {
    return { formValues: state.form.surveyForm.values };
}

const SurveyFormReview = connect(
    mapStateToProps,
    actions,
)(withRouter<any, typeof SurveyFormReviewBase>(SurveyFormReviewBase));

export { SurveyFormReview };
