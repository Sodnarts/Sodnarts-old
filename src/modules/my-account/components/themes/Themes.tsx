import { Paper, Typography, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { cc } from 'src/common/globals/color-codes/cc';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { IAuthState, IRootState } from 'src/common/state/reducers/IState';
import { color } from 'src/common/utils/getColor';
import { ThemeBar } from 'src/modules/my-account/components/themes/ThemeBar';
import { styles } from 'src/modules/my-account/components/themes/ThemesStyles';

interface IProps {
    auth: IAuthState;
}

interface IState {
    colors: string[];
}

type IThemes = IProps & WithStyles<typeof styles>;

class ThemesBase extends React.Component<IThemes, IState> {
    public state = {
        colors: [
            cc.themes.light.value,
            cc.themes.red.value,
            cc.themes.green.value,
            cc.themes.gray.value,
            cc.themes.yellow.value,
            cc.themes.pink.value,
            cc.themes.orange.value,
            cc.themes.blue.value,
            cc.themes.dark.value,
        ],
    };
    public render() {
        const { auth, classes } = this.props;
        const { colors } = this.state;
        const lang = getLanguageFile();

        const active = !!auth ? auth.theme : 'light';

        return (
            <div style={{ padding: '25px' }}>
                <Paper style={{ backgroundColor: color().secondary }} className={classes.container}>
                    <Typography variant="h4" style={{ color: color().text, textAlign: 'center' }}>
                        {lang.myaccount.themes.title}
                    </Typography>

                    {colors.map((colorValue) => {
                        return (
                            <div key={colorValue} style={{ position: 'relative', width: '100%', height: '10%' }}>
                                <ThemeBar
                                    active={!!(active === colorValue) ? true : false}
                                    text={cc.themes[colorValue].colors.text}
                                    name={lang.myaccount.themes[colorValue]}
                                    primary={cc.themes[colorValue].colors.primary}
                                    secondary={cc.themes[colorValue].colors.secondary}
                                    value={cc.themes[colorValue].value}
                                />
                            </div>
                        );
                    })}
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

export const Themes = connect(mapStateToProps)(withStyles(styles)(ThemesBase));
