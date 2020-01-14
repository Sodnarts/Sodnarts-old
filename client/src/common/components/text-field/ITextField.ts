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
    staticValue?: string; // Only use when field is not an input field
    error?: boolean;
    helperText?: string;
    labelColor?: string;
    onInputBlur?(value: string | number, label: string): void;
}
