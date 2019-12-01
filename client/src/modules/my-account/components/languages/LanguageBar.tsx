import { Paper, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'src/common/components/button/Button';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import * as actions from 'src/common/state/actions/index';
import { color } from 'src/common/utils/getColor';
import { styles } from 'src/modules/my-account/components/languages/LanguagesStyles';

interface IState {
    active: boolean;
    languageValue: {
        language: string;
    };
}

interface IProps {
    active: boolean;
    language: string;
    langFile: any;
    value: string;
    changeLanguage: (language: any) => void;
}

type ILanguageBar = IProps & WithStyles<typeof styles>;

class LanguageBarBase extends React.Component<ILanguageBar, IState> {
    constructor(props: ILanguageBar) {
        super(props);

        this.state = {
            active: this.props.active,
            languageValue: { language: this.props.value },
        };
    }

    public componentWillReceiveProps(props: IProps) {
        this.setState({
            active: props.active,
        });
    }

    public handleClick = () => {
        this.props.changeLanguage(this.state.languageValue);
    };

    public render() {
        const { language, langFile, classes } = this.props;

        const disable = !!this.state.active ? true : false;
        const buttonText = !!this.state.active
            ? langFile.myaccount.languages.languageBar.activeButton
            : langFile.myaccount.languages.languageBar.selectButton;

        return (
            <div>
                <Paper style={{ backgroundColor: color().primary }} className={classes.paper}>
                    <div className="nav-wrapper">
                        <div style={{ color: color().text, padding: '0px' }} className="left brand-logo">
                            <h5 style={{ padding: '10px' }}>{language}</h5>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <ul>
                                <li>
                                    <Button
                                        onClick={this.handleClick}
                                        disabled={disable}
                                        buttonText={buttonText}
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

export const LanguageBar = connect(null, actions)(withStyles(styles)(LanguageBarBase));
