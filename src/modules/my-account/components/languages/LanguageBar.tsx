import { Paper, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'src/common/components/button/Button';
import { color } from 'src/common/utils/getColor';
import { styles } from 'src/modules/my-account/components/languages/LanguagesStyles';
import * as actions from 'src/modules/my-account/redux/actions';

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
            <Paper style={{ backgroundColor: color().primary }} className={classes.paper}>
                <div style={{ color: color().text }} className={classes.languageTitle}>
                    <h3 style={{ padding: '10px' }}>{language}</h3>
                </div>
                <div className={classes.button}>
                    <Button onClick={this.handleClick} disabled={disable} buttonText={buttonText} hoverable={true} />
                </div>
            </Paper>
        );
    }
}

export const LanguageBar = connect(null, actions)(withStyles(styles)(LanguageBarBase));
