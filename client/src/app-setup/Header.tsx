import { AppBar, Button, createStyles, Theme, Toolbar, Typography, withStyles } from '@material-ui/core';
import { WithStyles } from '@material-ui/styles';
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { LogoutMenu } from 'src/app-setup/components/LogoutMenu';
import { MenuButton } from 'src/app-setup/components/modules-menu/MenuButton';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { routes } from 'src/common/globals/routes/routes';
import { IAuthenticationProps } from 'src/common/interface/IAuthentication';
import { color } from 'src/common/utils/getColor';
import { EmailHeader } from 'src/modules/email-service/header/EmailHeader';
import { HomeHeader } from 'src/modules/home-page/header/HomeHeader';
import { MyAccountHeader } from 'src/modules/my-account/header/MyAccountHeader';
import { WebShopHeader } from 'src/modules/web-shop/header/WebShopHeader';

interface IProps {
    toggleMenu: boolean;
}

interface IState {
    width: number;
}

/**
 *
 * @class Header
 * @extends {React.Component<IAuthenticationProps>}
 */
class HeaderBase extends React.Component<IAuthenticationProps & IProps & WithStyles<typeof styles>, IState> {
    private lang = getLanguageFile();

    public renderContent() {
        const displayText = this.lang.header.user.login;

        switch (this.props.auth) {
            case null:
                return '';
            case false:
                return (
                    <a
                        href="/auth/google"
                        style={{
                            color: color().text,
                            paddingLeft: '30px',
                            paddingRight: '25px',
                            textDecoration: 'none',
                        }}
                    >
                        {displayText}
                    </a>
                );
            default:
                return <LogoutMenu />;
        }
    }
    public render() {
        const { classes, toggleMenu } = this.props;
        return (
            <AppBar
                elevation={!!toggleMenu ? 0 : 4}
                position="sticky"
                style={{
                    backgroundColor: !!this.props.theme ? this.props.theme.primary : 'blue',
                    minHeight: '64px',
                }}
            >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link
                            to={'/'}
                            className={classes.logo}
                            style={{ color: !!this.props.theme ? this.props.theme.text : 'white' }}
                        >
                            Sodnarts
                        </Link>
                    </Typography>
                    <MenuButton />
                    <div className={classes.grow} />
                    <Switch>
                        <Route path={routes.emailService.home} component={EmailHeader} />
                        <Route path={routes.account.home} component={MyAccountHeader} />
                        <Route path={'/web-shop'} component={WebShopHeader} />
                        <Route path={routes.home.home} component={HomeHeader} />
                    </Switch>
                    <Button color="inherit">{this.renderContent()}</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = ({ auth, theme, toggleMenu }: any) => {
    return { auth, theme, toggleMenu };
};

const styles = (theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 3,
        },
        logo: {
            fontFamily: 'Times New Roman',
            fontSize: '24px',
            fontStyle: 'italic',
            left: '0px',
            marginLeft: theme.spacing(2),
            position: 'relative',
            textDecoration: 'none',
        },
        title: {
            marginLeft: '16px',
            marginRight: '48px',
        },
    });

const Header = connect(mapStateToProps)(withStyles(styles)(HeaderBase));

export { Header };
