import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { UnauthorizedAccess } from 'src/common/error-pages/UnauthorizedAccess';
import { routes } from 'src/common/globals/routes/routes';
import { IAuthState, IRootState } from 'src/common/state/reducers/IState';
import { Dashboard } from 'src/modules/user-admin/components/dashboard/Dashboard';

interface IProps {
    auth: IAuthState;
}

/**
 *
 *
 * @class HomeRouter
 * @extends {React.Component}
 */
const UserAdminRouterBase = ({ auth }: IProps) => {
    const renderContent = () => {
        if (auth && (auth.roles.includes('Admin') || auth.roles.includes('Owner'))) {
            return (
                <Switch>
                    <Route exact={true} path={routes.userAdmin.home} component={Dashboard} />
                    <Redirect to={routes.userAdmin.home} />
                </Switch>
            );
        } else {
            return (
                <Switch>
                    <Route component={UnauthorizedAccess} />
                </Switch>
            );
        }
    };

    return <div>{renderContent()}</div>;
};

const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

export const UserAdminRouter = connect(mapStateToProps)(UserAdminRouterBase);
