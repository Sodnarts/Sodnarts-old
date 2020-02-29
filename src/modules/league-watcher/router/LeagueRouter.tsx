import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { UnauthorizedAccess } from 'src/common/error-pages/UnauthorizedAccess';
import { routes } from 'src/common/globals/routes/routes';
import { IAuthState, IRootState } from 'src/common/state/reducers/IState';
import { LeaguePage } from 'src/modules/league-watcher/components/LeaguePage';

interface IProps {
    auth: IAuthState;
}

/**
 *
 *
 * @class HomeRouter
 * @extends {React.Component}
 */
const LeagueRouterBase = ({ auth }: IProps) => {
    const renderContent = () => {
        if (
            auth &&
            (auth.roles.includes('League-Watcher') || auth.roles.includes('Admin') || auth.roles.includes('Owner'))
        ) {
            return (
                <Switch>
                    <Route exact={true} path={routes.league.home} component={LeaguePage} />
                    <Redirect to={routes.league.home} />
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

    return (
        <div>
            <div style={{ textAlign: 'center' }}>{renderContent()}</div>
        </div>
    );
};

const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

const LeagueRouter = connect(mapStateToProps)(LeagueRouterBase);

export { LeagueRouter };
