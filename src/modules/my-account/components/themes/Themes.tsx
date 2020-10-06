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
        const shouldElevate = !!(window.innerWidth > 960) ? true : false;

        return (
            <Paper
                elevation={!!shouldElevate ? 1 : 0}
                style={{ backgroundColor: color().secondary }}
                className={classes.container}
            >
                <Typography variant="h4" className={classes.title} style={{ color: color().text }}>
                    {lang.myaccount.themes.title}
                </Typography>

                {colors.map((colorValue) => {
                    return (
                        <div key={colorValue} className={classes.themeBarContainer}>
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
        );
    }
}

const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

export const Themes = connect(mapStateToProps)(withStyles(styles)(ThemesBase));
