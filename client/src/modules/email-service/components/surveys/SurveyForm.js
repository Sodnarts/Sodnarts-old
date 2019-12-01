import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { SurveyField } from 'src/modules/email-service/components/surveys/SurveyField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { validateEmails } from 'src/common/utils/validateEmails';
import { formFields } from 'src/modules/email-service/components/surveys/formFields';
import { color } from 'src/common/utils/getColor';
import { routes } from 'src/common/globals/routes/routes';
import { getLanguageFile } from 'src/common/globals/languages/lang';

/**
 * Current file is written in JavaScript due to Redux-form's incapatibility with TypeScript
 *
 * Creates a form that consists of multiple SurveyformFields.
 * Allows user to fill out the form.
 */
const SurveyFormBase = ({ onSurveySubmit, handleSubmit }) => {
    const renderformFields = () => {
        return _.map(formFields(getLanguageFile()), ({ label, name }) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />;
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSurveySubmit)}>
                {renderformFields()}
                <Link
                    style={{
                        color: color().text,
                        borderRadius: '50px',
                        fontSize: '15px',
                        backgroundColor: color().primary,
                    }}
                    to={routes.emailService.emailDashboard}
                    className="btn left"
                >
                    {getLanguageFile().surveys.form.button.cancel}
                    <i style={{ marginRight: '5px' }} className="material-icons left">
                        close
                    </i>
                </Link>
                <button
                    style={{ color: color().text, borderRadius: '50px', fontSize: '15px' }}
                    type="submit"
                    className="green darken-2 btn right"
                >
                    {getLanguageFile().surveys.form.button.next}
                    <i style={{ fontSize: '20px', marginLeft: '5px' }} className="material-icons right">
                        chevron_right
                    </i>
                </button>
            </form>
        </div>
    );
};

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ name, error }) => {
        if (!values[name]) {
            errors[name] = error;
        }
    });

    return errors;
}

const SurveyForm = reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false,
})(SurveyFormBase);

export { SurveyForm };
