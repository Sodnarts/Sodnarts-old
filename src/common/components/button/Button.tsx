import { Button as MUIButton, WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { styles } from 'src/common/components/button/ButtonStyles';
import { IButtonProps } from 'src/common/components/button/IButton';
import { color } from 'src/common/utils/getColor';

interface IState {
    hovered: boolean;
}

type IButton = IButtonProps & WithStyles<typeof styles>;

class ButtonBase extends React.PureComponent<IButton, IState> {
    constructor(props: IButton) {
        super(props);

        this.state = {
            hovered: false,
        };
    }

    public toggleHover = () => {
        this.setState({ hovered: !this.state.hovered });
    };

    public render() {
        const {
            backgroundColorPrimary,
            backgroundColorSecondary,
            buttonText,
            classes,
            disabled,
            hoverable,
            onClick,
            textColor,
            isRound,
            size,
            leftIcon,
            rightIcon,
            submit,
        } = this.props;

        return (
            <MUIButton
                onClick={!!onClick ? onClick : undefined}
                disabled={!!disabled ? disabled : false}
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}
                size={!!size ? size : 'medium'}
                type={!!submit ? 'submit' : 'button'}
                style={
                    !!hoverable && !!this.state.hovered
                        ? {
                              backgroundColor: !!backgroundColorSecondary
                                  ? backgroundColorSecondary
                                  : color().secondary,
                              borderRadius: !!isRound ? '50px' : '0px',
                              color: !!textColor ? textColor : color().text,
                          }
                        : {
                              backgroundColor: !!backgroundColorPrimary ? backgroundColorPrimary : color().primary,
                              borderRadius: !!isRound ? '50px' : '0px',
                              color: !!textColor ? textColor : color().text,
                          }
                }
                className={classes.button}
            >
                {leftIcon} {buttonText} {rightIcon}
            </MUIButton>
        );
    }
}

const Button = withStyles(styles)(ButtonBase);

export { Button };
