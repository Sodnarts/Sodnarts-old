import { Divider, Menu, MenuItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
import { WithStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from 'src/app-setup/styles/LogoutMenuStyles';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { routes } from 'src/common/globals/routes/routes';
import { color } from 'src/common/utils/getColor';

interface IState {
    anchorEl: any;
}

type ILogoutMenu = WithStyles<typeof styles>;

/**
 * The actual component
 * @param props
 */
class LogoutMenuBase extends React.Component<ILogoutMenu, IState> {
    constructor(props: ILogoutMenu) {
        super(props);

        this.state = {
            anchorEl: null,
        };
    }

    /**
     * Opens the menu
     *
     * @param {*} event
     * @memberof LogoutMenuBase
     */
    public handleClick = (event: any) => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    public handleLogout = () => {
        const cookies = document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
    };

    /**
     * Closes the menu
     *
     * @memberof LogoutMenuBase
     */
    public handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    /**
     * Renders the menu itself
     *
     * @returns
     * @memberof LogoutMenuBase
     */
    public renderMenu = () => {
        return withStyles({
            paper: {
                backgroundColor: color().primary,
                border: `1px solid ${color().border}`,
                marginTop: '1px',
                right: '0px !important',
            },
        })((props: any) => (
            <Menu
                elevation={4}
                getContentAnchorEl={null}
                anchorOrigin={{
                    horizontal: 'left',
                    vertical: 'bottom',
                }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                {...props}
            />
        ));
    };

    /**
     * Renders the items inside of the menu itself.
     *
     * @returns
     * @memberof LogoutMenuBase
     */
    public renderMenuItem = () => {
        return withStyles((theme) => ({
            root: {
                '&:focus': {
                    backgroundColor: color().secondary,
                    color: color().text,
                },
                '&:hover': {
                    backgroundColor: color().secondary,
                    color: color().text,
                },
                'color': color().text,
            },
        }))(MenuItem);
    };

    public render() {
        const lang = getLanguageFile();
        const { classes } = this.props;

        const StyledMenu = this.renderMenu();
        const StyledMenuItem = this.renderMenuItem();
        return (
            <div>
                <a
                    style={{ color: color().text }}
                    id="disp"
                    className={classes.button}
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <AccountCircle style={{ marginTop: '6px' }} fontSize="large" />
                </a>
                <div>
                    <StyledMenu
                        anchorEl={this.state.anchorEl}
                        onClick={this.handleClose}
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                    >
                        <Link className={classes.link} to={routes.account.home}>
                            <StyledMenuItem className={classes.menuItem}>
                                <ListItemText primary={lang.header.user.account} />
                            </StyledMenuItem>
                        </Link>
                        <Divider />
                        <a className={classes.link} onClick={this.handleLogout} href={routes.auth.logout}>
                            <StyledMenuItem className={classes.menuItem}>
                                <ListItemText primary={lang.header.user.logout} />
                            </StyledMenuItem>
                        </a>
                    </StyledMenu>
                </div>
            </div>
        );
    }
}

export const LogoutMenu = withStyles(styles)(LogoutMenuBase);
