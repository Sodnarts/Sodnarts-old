import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { PageNotFound } from 'src/common/error-pages/PageNotFound';
import { routes } from 'src/common/globals/routes/routes';
import { IRootState } from 'src/common/state/reducers/IState';
import { LeaguePage } from 'src/modules/league-watcher/components/LeaguePage';

/**
 *
 *
 * @class HomeRouter
 * @extends {React.Component}
 */
const LeagueRouterBase = () => (
    <div>
        <div style={{ textAlign: 'center' }}>
            <Switch>
                <Route exact={true} path={routes.league.home} component={LeaguePage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </div>
);
const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

const LeagueRouter = connect(mapStateToProps)(LeagueRouterBase);

export { LeagueRouter };
