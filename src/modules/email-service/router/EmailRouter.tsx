import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { UnauthorizedAccess } from 'src/common/error-pages/UnauthorizedAccess';
import { routes } from 'src/common/globals/routes/routes';
import { IAuthState, IRootState } from 'src/common/state/reducers/IState';
import { Email } from 'src/modules/email-service/components/Email';
import { EmailDashboard } from 'src/modules/email-service/components/EmailDashboard';

interface IProps {
    auth: IAuthState;
}

/**
 *
 *
 * @class EmailRouter
 * @extends {React.Component}
 */
const EmailRouterBase = ({ auth }: IProps) => {
    const renderContent = () => {
        if (
            auth &&
            (auth.roles.includes('Email-Service') || auth.roles.includes('Admin') || auth.roles.includes('Owner'))
        ) {
            return (
                <Switch>
                    <Route exact={true} path={routes.emailService.home} component={Email} />
                    <Route exact={true} path={routes.emailService.emailDashboard} component={EmailDashboard} />
                    <Redirect to={routes.emailService.home} />
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
            <div className="container" style={{ position: 'relative' }}>
                {renderContent()}
            </div>
        </div>
    );
};
const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

const EmailRouter = connect(mapStateToProps)(EmailRouterBase);

export { EmailRouter };
