import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { Button } from 'src/common/components/button/Button';
import { TextField } from 'src/common/components/text-field/TextField';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { validateEmails } from 'src/common/utils/validateEmails';
import { formFields } from 'src/modules/email-service/components/surveys/formFields';

interface IProps {
    onSurveySubmit: (survey: any) => void;
    handleCancel: () => void;
}

interface IState {
    'Email Body': string;
    'Recipients List': string;
    'Subject Line': string;
    'Survey Title': string;
    'error': string;
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
class SurveyForm extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            'Email Body': '',
            'Recipients List': '',
            'Subject Line': '',
            'Survey Title': '',
            'error': '',
        };
    }

    public handleSubmit = (event: any) => {
        event.preventDefault();
        this.setState(
            {
                error: validate(this.state['Recipients List']),
            },
            () => {
                const survey = {
                    body: this.state['Email Body'],
                    recipients: this.state['Recipients List'],
                    subject: this.state['Subject Line'],
                    title: this.state['Survey Title'],
                };
                if (!this.state.error) {
                    this.props.onSurveySubmit(survey);
                }
            },
        );
    };

    public onInputBlur = (value: string | number, id: string) => {
        this.setState({ ...this.state, [id]: value });
    };

    public renderFormFields = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {formFields(getLanguageFile()).map(({ label, name, id }) => {
                    return (
                        <TextField
                            key={id}
                            id={id}
                            label={label}
                            onInputBlur={this.onInputBlur}
                            multiLine={true}
                            required={true}
                            error={!!(this.state.error && id === 'Recipients List') ? true : false}
                            helperText={!!(this.state.error && id === 'Recipients List') ? this.state.error : ''}
                        />
                    );
                })}
            </div>
        );
    };

    public render() {
        const { handleCancel } = this.props;

        return (
            <div style={{ minWidth: '500px' }}>
                <form onSubmit={this.handleSubmit}>
                    {this.renderFormFields()}
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
                                textColor="white"
                                backgroundColorPrimary="#388E3C"
                                backgroundColorSecondary="#327d3a"
                                hoverable={true}
                                submit={true}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values: any) {
    const errors: IError = {
        recipients: '',
    };

    errors.recipients = validateEmails(values || '');
    return errors.recipients;
}

export { SurveyForm };
