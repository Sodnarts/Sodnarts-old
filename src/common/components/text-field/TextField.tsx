import { TextField as MUITextField } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/styles';
import React from 'react';
import { ITextFieldProps } from 'src/common/components/text-field/ITextField';
import { styles } from 'src/common/components/text-field/TextFieldStyles';
import { color } from 'src/common/utils/getColor';

interface IState {
    value: string;
}

type ITextField = ITextFieldProps & WithStyles<typeof styles>;

class TextFieldBase extends React.Component<ITextField, IState> {
    constructor(props: ITextField) {
        super(props);

        this.state = {
            value: !!this.props.value ? this.props.value : '',
        };
    }

    public componentWillReceiveProps(props: ITextField) {
        if (props.value) {
            this.setState({
                value: props.value.toString(),
            });
        }
    }

    public handleNumberInput(input: string) {
        const reg = new RegExp('^[\\d ]+$');
        const isBackSpace = !!(input < this.state.value) ? true : false;
        let value = input.replace(/ /g, '').trim();

        if (value.length > 8) {
            return;
        }

        const ss1 = value.substring(0, 2);
        const ss2 = value.substring(2, 4);
        const ss3 = value.substring(4, 6);
        const ss4 = value.substring(6, 8);

        if (value.length === 0) {
            this.setState({ value });
        } else if (reg.test(value) && !isBackSpace) {
            if (value.length >= 6) {
                value = ss1 + ' ' + ss2 + ' ' + ss3 + ' ' + ss4;
            } else if (value.length >= 4) {
                value = ss1 + ' ' + ss2 + ' ' + ss3;
            } else if (value.length >= 2) {
                value = ss1 + ' ' + ss2;
            }
            value = value.trim();
            this.setState({ value });
        } else if (isBackSpace) {
            if (value.length >= 7) {
                value = ss1 + ' ' + ss2 + ' ' + ss3 + ' ' + ss4;
            } else if (value.length >= 5) {
                value = ss1 + ' ' + ss2 + ' ' + ss3;
            } else if (value.length >= 3) {
                value = ss1 + ' ' + ss2;
            }
            value = value.trim();
            this.setState({ value });
        }
    }

    public onChange = (event: any) => {
        const value = event.target.value;

        if (!!this.props.numberInput) {
            this.handleNumberInput(value);
        } else {
            this.setState({ value });
        }
    };

    public onBlur = () => {
        const { onInputBlur, id } = this.props;
        // tslint:disable-next-line: no-unused-expression
        if (onInputBlur) {
            onInputBlur(this.state.value, !!id ? id : 'undefined');
        }
    };

    public render() {
        const {
            label,
            disableUnderline,
            style,
            disableInput,
            textIndentation,
            textColor,
            multiLine,
            required,
            className,
            error,
            helperText,
            labelColor,
        } = this.props;

        return (
            <MUITextField
                onBlur={this.onBlur}
                onChange={this.onChange}
                autoComplete={'wrong field'}
                style={style}
                className={className}
                value={this.state.value}
                label={label}
                multiline={multiLine}
                required={required}
                error={error}
                helperText={helperText}
                // tslint:disable-next-line: max-line-length
                InputProps={{
                    disableUnderline,
                    disabled: disableInput,
                    style: {
                        color: !!textColor ? textColor : color().secondaryText,
                        marginLeft: !!textIndentation ? textIndentation : '0px',
                        textAlign: 'center',
                    },
                }}
                InputLabelProps={!!labelColor ? { style: { color: labelColor } } : {}}
            />
        );
    }
}

const TextField = withStyles(styles)(TextFieldBase);
export { TextField };
