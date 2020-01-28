import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { PageNotFound } from 'src/common/error-pages/PageNotFound';
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
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </div>
);

const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

export const AccountRouter = connect(mapStateToProps)(AccountRouterBase);
