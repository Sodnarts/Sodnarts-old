import { TextField as MUITextField } from '@material-ui/core';
import { InputProps } from '@material-ui/core/Input';
import { withStyles, WithStyles } from '@material-ui/styles';
import React from 'react';
import { styles } from 'src/common/components/text-field/TextFieldStyles';
import { color } from 'src/common/utils/getColor';

interface IProps extends InputProps {
    textColor?: string;
    disableInput?: boolean;
    disableUnderline: boolean;
    label: string;
    textIndentation?: string;
    validate?: boolean;
    value: string;
    onInputBlur?(value: string | number, label: string): void;
}

interface IState {
    value: string;
}

type ITextField = IProps & WithStyles<typeof styles>;

class TextFieldBase extends React.PureComponent<ITextField, IState> {
    constructor(props: ITextField) {
        super(props);

        this.state = {
            value: '',
        };
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
        const { label, disableUnderline, style, value, disableInput, textIndentation, textColor } = this.props;

        return (
            <MUITextField
                onBlur={this.onBlur}
                onChange={this.onChange}
                autoComplete={'wrong field'}
                style={style}
                defaultValue={value}
                label={label}
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
                InputLabelProps={!!textColor ? { style: { color: textColor } } : {}}
            />
        );
    }
}

const TextField = withStyles(styles)(TextFieldBase);
export { TextField };
