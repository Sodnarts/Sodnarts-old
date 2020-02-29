import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { routes } from 'src/common/globals/routes/routes';
import { IRootState } from 'src/common/state/reducers/IState';
import { MyAccount } from 'src/modules/my-account/components/MyAccountPage';

/**
 *
 *
 * @class HomeRouter
 * @extends {React.Component}
 */
const AccountRouterBase = () => (
    <div>
        <div style={{ textAlign: 'center' }}>
            <Switch>
                <Route exact={true} path={routes.account.home} component={MyAccount} />
                <Redirect to={routes.account.home} />
            </Switch>
        </div>
    </div>
);

const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

export const AccountRouter = connect(mapStateToProps)(AccountRouterBase);
