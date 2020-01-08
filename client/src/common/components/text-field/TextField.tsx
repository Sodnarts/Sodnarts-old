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

    public onChange = (event: any) => {
        this.setState({ value: event.target.value });
    };

    public onBlur = () => {
        const { onInputBlur, label } = this.props;
        // tslint:disable-next-line: no-unused-expression
        if (onInputBlur) {
            onInputBlur(this.state.value, label);
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
            staticValue,
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
