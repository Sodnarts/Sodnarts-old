import { AppBar, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { routes } from 'src/common/globals/routes/routes';
import { color } from 'src/common/utils/getColor';

interface IProps {
    setValidation: (validation: boolean) => void;
}

const PaymentDrawerLogin = ({ setValidation }: IProps) => {
    const [state, setState] = useState({ password: '', username: '', error: '' });
    const lang = getLanguageFile();

    const handleUsernameOnChange = (event: any) => {
        setState({
            ...state,
            username: event.target.value,
        });
    };

    const handlePasswordOnChange = (event: any) => {
        setState({
            ...state,
            password: event.target.value,
        });
    };

    const handleValidation = () => {
        if (
            state.username === routes.emailService.drawer.username &&
            state.password === routes.emailService.drawer.password
        ) {
            setState({ ...state, error: '' });
            setValidation(true);
        } else {
            setState({
                ...state,
                error: lang.error.messages.wrongCredentials,
            });
        }
    };

    return (
        <div>
            <AppBar
                elevation={1}
                position="sticky"
                style={{ top: '30px', padding: '30px', backgroundColor: 'white', border: '1px solid #00000030' }}
            >
                <div style={{ color: 'black', textAlign: 'center' }}>
                    <h6>{state.error}</h6>
                </div>
                <TextField
                    id="standard-name"
                    label={lang.payments.labelName}
                    margin="normal"
                    onChange={handleUsernameOnChange}
                    required={true}
                    style={{ width: '100%' }}
                />
                <TextField
                    id="standard-password"
                    label={lang.payments.labelPass}
                    margin="normal"
                    onChange={handlePasswordOnChange}
                    required={true}
                    style={{ width: '100%' }}
                    type="password"
                />
                <Button
                    style={{
                        backgroundColor: color().text,
                        border: `1px solid ${color().primary}`,
                        borderRadius: '50px',
                        color: color().primary,
                        marginLeft: '25%',
                        width: '50%',
                    }}
                    onClick={handleValidation}
                >
                    {lang.payments.button}
                </Button>
            </AppBar>
        </div>
    );
};

export { PaymentDrawerLogin };
