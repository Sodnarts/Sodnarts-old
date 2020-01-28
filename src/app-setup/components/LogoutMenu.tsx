import { Divider, Menu, MenuItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
import { WithStyles } from '@material-ui/styles';
import React, { SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { styles } from 'src/app-setup/styles/LogoutMenuStyles';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { routes } from 'src/common/globals/routes/routes';
import * as actions from 'src/common/state/actions/index';
import { color } from 'src/common/utils/getColor';

interface IProps {
    logOut: () => void;
}

interface IState {
    anchorEl: any;
}

type ILogoutMenu = IProps & WithStyles<typeof styles>;

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
    public handleClick = (event: SyntheticEvent) => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    public handleLogout = () => {
        this.props.logOut();
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
        return withStyles(() => ({
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
                        <div className={classes.link} onClick={this.handleLogout}>
                            <StyledMenuItem className={classes.menuItem}>
                                <ListItemText primary={lang.header.user.logout} />
                            </StyledMenuItem>
                        </div>
                    </StyledMenu>
                </div>
            </div>
        );
    }
}

export const LogoutMenu = connect(null, actions)(withStyles(styles)(LogoutMenuBase));
