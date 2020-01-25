import { Paper, Typography, withStyles } from '@material-ui/core';
import { WithStyles } from '@material-ui/styles';
import React from 'react';
import { connect } from 'react-redux';
import { de } from 'src/common/globals/languages/de';
import { en } from 'src/common/globals/languages/en';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { no } from 'src/common/globals/languages/no';
import { color } from 'src/common/utils/getColor';
import { LanguageBar } from 'src/modules/my-account/components/languages/LanguageBar';
import { styles } from 'src/modules/my-account/components/languages/LanguagesStyles';

interface IProps {
    auth: any;
}

type ILanguages = IProps & WithStyles<typeof styles>;

class LanguagesBase extends React.Component<ILanguages> {
    public render() {
        const { auth, classes } = this.props;
        const lang = getLanguageFile();

        const enActive = !!(auth.language === 'en') ? true : false;
        const noActive = !!(auth.language === 'no') ? true : false;
        const deActive = !!(auth.language === 'de') ? true : false;

        return (
            <div style={{ padding: '25px' }}>
                <Paper style={{ backgroundColor: color().secondary }} className={classes.container}>
                    <Typography variant="h4" style={{ color: 'white', textAlign: 'center' }}>
                        {lang.myaccount.languages.title}
                    </Typography>
                    <div style={{ position: 'relative', width: '100%', height: '10%' }}>
                        <LanguageBar
                            active={enActive}
                            language={en.myaccount.languages.en}
                            langFile={lang}
                            value={en.language}
                        />
                    </div>
                    <div style={{ position: 'relative', width: '100%', height: '10%' }}>
                        <LanguageBar
                            active={noActive}
                            language={no.myaccount.languages.no}
                            langFile={lang}
                            value={no.language}
                        />
                    </div>
                    <div style={{ position: 'relative', width: '100%', height: '10%' }}>
                        <LanguageBar
                            active={deActive}
                            language={de.myaccount.languages.de}
                            langFile={lang}
                            value={de.language}
                        />
                    </div>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = ({ auth, theme }: any) => {
    return { auth, theme };
};

export const Languages = connect(mapStateToProps)(withStyles(styles)(LanguagesBase));
