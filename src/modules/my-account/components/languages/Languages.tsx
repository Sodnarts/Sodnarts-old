import { Paper, Typography, withStyles } from '@material-ui/core';
import { WithStyles } from '@material-ui/styles';
import React from 'react';
import { connect } from 'react-redux';
import { de } from 'src/common/globals/languages/de';
import { en } from 'src/common/globals/languages/en';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { no } from 'src/common/globals/languages/no';
import { IAuthState, IRootState } from 'src/common/state/reducers/IState';
import { color } from 'src/common/utils/getColor';
import { LanguageBar } from 'src/modules/my-account/components/languages/LanguageBar';
import { styles } from 'src/modules/my-account/components/languages/LanguagesStyles';

interface IProps {
    auth: IAuthState;
}

type ILanguages = IProps & WithStyles<typeof styles>;

class LanguagesBase extends React.Component<ILanguages> {
    public render() {
        const { auth, classes } = this.props;
        const lang = getLanguageFile();

        const enActive = !!auth ? (!!(auth.language === 'en') ? true : false) : false;
        const noActive = !!auth ? (!!(auth.language === 'no') ? true : false) : false;
        const deActive = !!auth ? (!!(auth.language === 'de') ? true : false) : false;
        const shouldElevate = !!(window.innerWidth > 960) ? true : false;

        return (
            <Paper
                elevation={!!shouldElevate ? 1 : 0}
                style={{ backgroundColor: color().secondary }}
                className={classes.container}
            >
                <Typography variant="h4" style={{ color: color().text }} className={classes.title}>
                    {lang.myaccount.languages.title}
                </Typography>
                <div className={classes.languageContainer}>
                    <LanguageBar
                        active={enActive}
                        language={en.myaccount.languages.en}
                        langFile={lang}
                        value={en.language}
                    />
                </div>
                <div className={classes.languageContainer}>
                    <LanguageBar
                        active={noActive}
                        language={no.myaccount.languages.no}
                        langFile={lang}
                        value={no.language}
                    />
                </div>
                <div className={classes.languageContainer}>
                    <LanguageBar
                        active={deActive}
                        language={de.myaccount.languages.de}
                        langFile={lang}
                        value={de.language}
                    />
                </div>
            </Paper>
        );
    }
}

const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

export const Languages = connect(mapStateToProps)(withStyles(styles)(LanguagesBase));
