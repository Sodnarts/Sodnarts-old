import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PageNotFound } from 'src/common/error-pages/PageNotFound';
import { routes } from 'src/common/globals/routes/routes';
import { Email } from 'src/modules/email-service/components/Email';
import { EmailDashboard } from 'src/modules/email-service/components/EmailDashboard';

/**
 *
 *
 * @class EmailRouter
 * @extends {React.Component}
 */
const EmailRouterBase = () => (
    <div>
        <div className="container" style={{ position: 'relative' }}>
            <Switch>
                <Route exact={true} path={routes.emailService.home} component={Email} />
                <Route exact={true} path={routes.emailService.emailDashboard} component={EmailDashboard} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </div>
);

const mapStateToProps = ({ auth }: any) => {
    return { auth };
};

const EmailRouter = connect(mapStateToProps)(EmailRouterBase);

export { EmailRouter };
