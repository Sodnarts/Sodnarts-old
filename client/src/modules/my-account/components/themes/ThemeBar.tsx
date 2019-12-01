import { Paper, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'src/common/components/button/Button';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import * as actions from 'src/common/state/actions/index';
import { styles } from 'src/modules/my-account/components/themes/ThemesStyles';

interface IState {
    active: boolean;
    backgroundColor: string;
}
interface IProps {
    active: boolean;
    name: string;
    text: string;
    primary: string;
    secondary: string;
    value: string;
    changeTheme: (theme: any) => void;
}
type IThemeBar = IProps & WithStyles<typeof styles>;

class ThemeBarBase extends React.Component<IThemeBar, IState> {
    constructor(props: IThemeBar) {
        super(props);

        this.state = {
            active: this.props.active,
            backgroundColor: this.props.primary,
        };
    }

    public componentWillReceiveProps(props: IProps) {
        this.setState({
            active: props.active,
        });
    }

    public handleClick = () => {
        this.props.changeTheme({ theme: this.props.value });
    };
    public render() {
        const { name, text, primary, secondary, classes } = this.props;
        const lang = getLanguageFile();

        const disable = !!this.state.active ? true : false;
        const buttonText = !!this.state.active
            ? lang.myaccount.themes.themebar.activeButton
            : lang.myaccount.themes.themebar.selectButton;

        return (
            <div>
                <Paper style={{ backgroundColor: primary }} className={classes.paper}>
                    <div className="nav-wrapper">
                        <div style={{ color: 'white', padding: '0px' }} className="left brand-logo">
                            <h5 style={{ color: text, padding: '10px' }}>
                                {name} {lang.myaccount.themes.theme}
                            </h5>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <ul>
                                <li>
                                    <Button
                                        onClick={this.handleClick}
                                        disabled={disable}
                                        buttonText={buttonText}
                                        backgroundColorPrimary={primary}
                                        backgroundColorSecondary={secondary}
                                        textColor={text}
                                        hoverable={true}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

export const ThemeBar = connect(null, actions)(withStyles(styles)(ThemeBarBase));
