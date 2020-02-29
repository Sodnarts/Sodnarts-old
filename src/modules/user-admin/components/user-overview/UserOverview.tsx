import {
    Chip,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    withStyles,
    WithStyles,
} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { IAuthState, IRootState } from 'src/common/state/reducers/IState';
import { styles } from 'src/modules/user-admin/components/user-overview/UserOverviewStyles';
import * as actions from 'src/modules/user-admin/redux/actions/';
import { IUserAdminObject } from 'src/modules/user-admin/redux/actions/IActions';
import { IUsersState } from 'src/modules/user-admin/redux/reducers/IState';

interface IProps {
    auth: IAuthState;
    users: IUsersState;
    fetchUsers(): void;
    updateUserRoles(user: IUserAdminObject): void;
}

interface IState {
    users: IUsersState;
}

type IUSerOverview = IProps & WithStyles<typeof styles>;

class UserOverviewBase extends React.Component<IUSerOverview, IState> {
    constructor(props: IUSerOverview) {
        super(props);

        this.state = {
            users: [],
        };

        if (props.fetchUsers) {
            props.fetchUsers();
        }
    }

    public componentWillReceiveProps(props: IProps) {
        this.setState({
            users: props.users,
        });
    }

    public handleUpdateUser = (roleToDelete: string, user: IUserAdminObject) => {
        const tmpRoles: string[] = [];
        user.roles.forEach((role: string) => {
            if (role !== roleToDelete) {
                tmpRoles.push(role);
            }
        });

        user.roles = tmpRoles;
        return user;
    };

    public handleRemoveRole = (roleToDelete: string, userToChange: IUserAdminObject) => {
        this.props.updateUserRoles(this.handleUpdateUser(roleToDelete, userToChange));
    };

    public handleSelectRole = (event: React.ChangeEvent<{ value: unknown }>, index: number) => {
        if (!!!event.target.value) {
            return;
        }

        const user = this.state.users[index];
        user.roles.push(event.target.value as string);
        this.props.updateUserRoles(user);
    };

    public isUserAdmin = (): boolean => {
        const { auth } = this.props;

        let isAdmin = false;
        if (!!auth) {
            if (auth.roles.includes('Admin') || auth.roles.includes('Owner')) {
                isAdmin = true;
            }
        }

        return isAdmin;
    };

    public renderList = () => {
        const { users } = this.state;
        const { classes } = this.props;

        return users.map((user: IUserAdminObject, index: number) => {
            return (
                <div key={user._id} style={{ marginTop: '12px' }}>
                    <Typography variant="h6">{!!user.firstName ? user.firstName : user.googleName}</Typography>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ flexGrow: 1, marginTop: '8px' }}>
                            {user.roles.map((role: string) => {
                                return (
                                    <Chip
                                        key={role}
                                        label={role}
                                        // tslint:disable-next-line: jsx-no-lambda
                                        onDelete={
                                            !!(role !== 'Owner') ? () => this.handleRemoveRole(role, user) : undefined
                                        }
                                        className={classes.chip}
                                    />
                                );
                            })}
                        </div>
                        <FormControl className={classes.formControl} style={{ marginRight: '20px' }}>
                            <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value=""
                                // tslint:disable-next-line: jsx-no-lambda
                                onClick={(event: React.ChangeEvent<any>) => this.handleSelectRole(event, index)}
                            >
                                {!!user.roles.includes('Home') ? null : <MenuItem value={'Home'}>Home</MenuItem>}
                                {!!user.roles.includes('Email-Service') ? null : (
                                    <MenuItem value={'Email-Service'}>Email-Service</MenuItem>
                                )}
                                {!!user.roles.includes('League-Watcher') ? null : (
                                    <MenuItem value={'League-Watcher'}>League-Watcher</MenuItem>
                                )}
                                {!!user.roles.includes('Web-Shop') ? null : (
                                    <MenuItem value={'Web-Shop'}>Web-Shop</MenuItem>
                                )}
                                {!!(user.roles.includes('Admin') || !this.isUserAdmin()) ? null : (
                                    <MenuItem value={'Admin'}>Admin</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </div>
                    <Divider />
                </div>
            );
        });
    };

    public render() {
        const { users } = this.state;

        return <>{!!users ? this.renderList() : null}</>;
    }
}

const mapStateToProps = ({ auth, userAdmin: { users } }: IRootState) => {
    return { auth, users };
};

const UserOverview = connect(mapStateToProps, actions)(withStyles(styles)(UserOverviewBase));

export { UserOverview };
