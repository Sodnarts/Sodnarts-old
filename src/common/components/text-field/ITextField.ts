import { InputProps } from '@material-ui/core/Input';

export interface ITextFieldProps extends InputProps {
    textColor?: string;
    disableInput?: boolean;
    disableUnderline?: boolean;
    label: string;
    textIndentation?: string;
    validate?: boolean;
    id?: string;
    value?: string;
    multiLine?: boolean;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    labelColor?: string;
    numberInput?: boolean;
    onInputBlur?(value: string | number, label: string): void;
}
