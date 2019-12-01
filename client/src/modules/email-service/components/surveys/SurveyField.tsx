import React from 'react';

interface IProps {
    input: string;
    label: string;
    meta: {
        error: string;
        touched: boolean;
    };
}

export const SurveyField = ({ input, label, meta: { error, touched } }: IProps) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
};
