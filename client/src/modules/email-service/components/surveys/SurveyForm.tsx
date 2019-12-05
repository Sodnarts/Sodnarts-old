import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import { Button } from 'src/common/components/button/Button';
import { TextField } from 'src/common/components/text-field/TextField';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { validateEmails } from 'src/common/utils/validateEmails';
import { formFields } from 'src/modules/email-service/components/surveys/formFields';

interface IProps {
    onSurveySubmit: () => void;
    handleCancel: () => void;
}

interface IError {
    recipients: string;
}

/**
 * Current file is written in JavaScript due to Redux-form's incapatibility with TypeScript
 *
 * Creates a form that consists of multiple SurveyformFields.
 * Allows user to fill out the form.
 */
const SurveyForm = ({ onSurveySubmit, handleCancel }: IProps) => {
    const [state, setState] = useState({
        'Email Body': '',
        'Recipients List': '',
        'Subject Line': '',
        'Survey Title': '',
        'error': '',
    });

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setState({ ...state, error: validate(state['Recipients List']) });

        if (!!state.error) {
            onSurveySubmit();
        }
    };

    const onInputBlur = (value: string | number, label: string) => {
        setState({ ...state, [label]: value });
    };

    const renderFormFields = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {formFields(getLanguageFile()).map(({ label, name }) => {
                    return (
                        <TextField
                            key={label}
                            label={label}
                            onInputBlur={onInputBlur}
                            multiLine={true}
                            required={true}
                            error={!!(state.error && label === 'Recipients List') ? true : false}
                            helperText={!!(state.error && label === 'Recipients List') ? state.error : ''}
                        />
                    );
                })}
            </div>
        );
    };

    return (
        <div style={{ minWidth: '500px' }}>
            <form onSubmit={handleSubmit}>
                {renderFormFields()}
                <div
                    style={{
                        display: 'flex',
                        margin: '20px 15px 10px 15px',
                    }}
                >
                    <Button
                        buttonText={'Cancel'}
                        isRound={true}
                        leftIcon={<CloseIcon style={{ height: '28px', width: '28px', marginRight: '10px' }} />}
                        size="small"
                        onClick={handleCancel}
                        hoverable={true}
                    />
                    <div style={{ flexGrow: 1 }}>
                        <Button
                            buttonText={'Next'}
                            isRound={true}
                            rightIcon={<ChevronRightIcon fontSize="large" style={{ marginLeft: '5px' }} />}
                            size="small"
                            hoverable={true}
                            submit={true}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

function validate(values: any) {
    const errors: IError = {
        recipients: '',
    };

    errors.recipients = validateEmails(values || '');
    return errors.recipients;
}

export { SurveyForm };
