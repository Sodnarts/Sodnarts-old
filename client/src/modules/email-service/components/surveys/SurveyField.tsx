import React from 'react';
import { TextField } from 'src/common/components/text-field/TextField';

interface IProps {
    label: string;
}

export const SurveyField = ({ label }: IProps) => {
    return (
        <div>
            <TextField label={label} />
        </div>
    );
};
