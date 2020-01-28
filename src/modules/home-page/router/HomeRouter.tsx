import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { PageNotFound } from 'src/common/error-pages/PageNotFound';
import { routes } from 'src/common/globals/routes/routes';
import { IRootState } from 'src/common/state/reducers/IState';
import { HomePage } from 'src/modules/home-page/components/HomePage';

/**
 *
 *
 * @class HomeRouter
 * @extends {React.Component}
 */
const HomeRouterBase = () => (
    <div>
        <div style={{ textAlign: 'center' }}>
            <Switch>
                <Route exact={true} path={routes.home.home} component={HomePage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </div>
);
const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

const HomeRouter = connect(mapStateToProps)(HomeRouterBase);

export { HomeRouter };
