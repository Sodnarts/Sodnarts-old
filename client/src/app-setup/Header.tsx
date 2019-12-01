import { createStyles, Theme, withStyles } from '@material-ui/core';
import { WithStyles } from '@material-ui/styles';
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { LogoutMenu } from 'src/app-setup/components/LogoutMenu';
import { MenuButton } from 'src/app-setup/components/MenuButton';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { routes } from 'src/common/globals/routes/routes';
import { IAuthenticationProps } from 'src/common/interface/IAuthentication';
import { color } from 'src/common/utils/getColor';
import { EmailHeader } from 'src/modules/email-service/header/EmailHeader';
import { HomeHeader } from 'src/modules/home-page/header/HomeHeader';
import { MyAccountHeader } from 'src/modules/my-account/header/MyAccountHeader';

interface IState {
    width: number;
}

/**
 *
 * @class Header
 * @extends {React.Component<IAuthenticationProps>}
 */
class HeaderBase extends React.Component<IAuthenticationProps & WithStyles<typeof styles>, IState> {
    private lang = getLanguageFile();

    constructor(props: IAuthenticationProps & WithStyles<typeof styles>) {
        super(props);

        this.state = {
            width: window.innerWidth,
        };
    }

    public componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    public handleResize = () => {
        this.setState({
            width: window.innerWidth,
        });
    };

    public renderContent() {
        const { width } = this.state;
        let displayText = this.lang.header.user.login;
        if (!!this.props.auth) {
            if (width >= 1000) {
                displayText = this.props.auth.googleName;
            } else {
                displayText = this.props.auth.googleName;
                const initials = [];
                const tempText = displayText.split(' ');
                for (let i = 0; i < tempText.length; i++) {
                    initials.push(tempText[i].slice(0, 1));
                }
                displayText = '';
                for (let i = 0; i < initials.length; i++) {
                    displayText = displayText + initials[i];
                }
            }
        }
        switch (this.props.auth) {
            case null:
                return null;
            case false:
                return (
                    <li>
                        <a
                            href="/auth/google"
                            style={{ color: color().text, paddingLeft: '30px', paddingRight: '25px' }}
                        >
                            {displayText}
                        </a>
                    </li>
                );
            default:
                return (
                    <li style={{ height: '100%', top: '0px', right: '15px' }}>
                        <LogoutMenu displayText={displayText} />
                    </li>
                );
        }
    }
    public render() {
        return (
            <div style={{ zIndex: 1010 }} className="navbar-fixed">
                <nav>
                    <div
                        style={{ backgroundColor: !!this.props.theme ? this.props.theme.primary : 'blue' }}
                        className="nav-wrapper"
                    >
                        <div style={{ position: 'relative' }}>
                            <ul className="right">{this.renderContent()}</ul>

                            <Switch>
                                <Route path={routes.emailService.home} component={EmailHeader} />
                                <Route path={routes.account.home} component={MyAccountHeader} />
                                <Route path={routes.home.home} component={HomeHeader} />
                            </Switch>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    position: 'relative',
                                }}
                            >
                                <Link
                                    to={routes.home.home}
                                    style={{
                                        color: color().text,
                                    }}
                                    className={this.props.classes.logo}
                                >
                                    {this.lang.header.main}
                                </Link>
                                <div className={this.props.classes.menu}>
                                    <MenuButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = ({ auth, theme }: any) => {
    return { auth, theme };
};

const styles = (theme: Theme) =>
    createStyles({
        logo: {
            fontFamily: 'Times New Roman',
            fontSize: '24px',
            fontStyle: 'italic',
            left: '0px',
            position: 'absolute',
            [theme.breakpoints.down(446)]: {
                paddingLeft: '10px',
            },
            [theme.breakpoints.up(446)]: {
                paddingLeft: '20px',
            },
            [theme.breakpoints.up(800)]: {
                paddingLeft: '35px',
            },
        },
        menu: {
            [theme.breakpoints.down(500)]: {
                paddingLeft: '110px',
            },
            [theme.breakpoints.up(500)]: {
                paddingLeft: '130px',
            },
            [theme.breakpoints.up(800)]: {
                paddingLeft: '175px',
            },
        },
    });
const Header = connect(mapStateToProps)(withStyles(styles)(HeaderBase));

export { Header };
