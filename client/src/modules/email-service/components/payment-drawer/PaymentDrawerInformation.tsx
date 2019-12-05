import { Divider, TextField } from '@material-ui/core';
import React from 'react';
import { getLanguageFile } from 'src/common/globals/languages/lang';

const PaymentDrawerInformation = () => {
    const lang = getLanguageFile();

    return (
        <div key={1} style={{ border: '1px solid #2196f3', borderRadius: '10px', padding: '10px' }}>
            <h5 style={{ margin: '0px', padding: '0px', textAlign: 'center' }}>{lang.payments.cardForm.creditCard}</h5>
            <Divider style={{ opacity: 0, marginTop: '10px' }} />
            <TextField
                InputProps={{ readOnly: true, disableUnderline: true }}
                id="email"
                label={lang.payments.cardForm.email}
                margin="normal"
                style={{ width: '100%' }}
                value={lang.payments.cardFormValues.email}
            />
            <Divider style={{ opacity: 0 }} />
            <TextField
                InputProps={{ readOnly: true, disableUnderline: true }}
                id="cardNumber"
                label={lang.payments.cardForm.cardNumber}
                margin="normal"
                style={{ width: '100%' }}
                value={lang.payments.cardFormValues.cardNumber}
            />
            <Divider style={{ opacity: 0 }} />
            <TextField
                InputProps={{ readOnly: true, disableUnderline: true }}
                id="date"
                label={lang.payments.cardForm.expire}
                margin="normal"
                style={{ width: '100%' }}
                value={lang.payments.cardFormValues.expire}
            />
            <Divider style={{ opacity: 0 }} />
            <TextField
                InputProps={{ readOnly: true, disableUnderline: true }}
                id="cvc"
                label={lang.payments.cardForm.cvc}
                margin="normal"
                style={{ width: '100%' }}
                value={lang.payments.cardFormValues.cvc}
            />
        </div>
    );
};

export { PaymentDrawerInformation };
