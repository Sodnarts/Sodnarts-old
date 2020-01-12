import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { PageNotFound } from 'src/common/error-pages/PageNotFound';
import { UnauthorizedAccess } from 'src/common/error-pages/UnauthorizedAccess';
import { routes } from 'src/common/globals/routes/routes';
import { IAuthenticationProps } from 'src/common/interface/IAuthentication';
import { IProps } from 'src/common/interface/IProps';
import { IState } from 'src/common/interface/IState';
import { color } from 'src/common/utils/getColor';
import { EmailRouter } from 'src/modules/email-service/router/EmailRouter';
import { HomeRouter } from 'src/modules/home-page/router/HomeRouter';
import { AccountRouter } from 'src/modules/my-account/router/AccountRouter';
import { WebShopRouter } from 'src/modules/web-shop/router/WebShopRouter';

type IRouter = IProps & IAuthenticationProps;

/**
 *
 * @component RouterComponent
 * @extends {<IRouter, IState>}
 */
const RouterComponentBase = (props: IRouter & IState) => {
    const renderContent = () => {
        switch (props.auth) {
            case null:
                return null;
            case false:
                return (
                    <Switch>
                        <Route exact={true} path={routes.home.home} component={HomeRouter} />
                        <Route component={UnauthorizedAccess} />
                    </Switch>
                );
            default:
                return (
                    <Switch>
                        <Route path={routes.emailService.home} component={EmailRouter} />
                        <Route path={routes.account.home} component={AccountRouter} />
                        <Route path={routes.webShop.home} component={WebShopRouter} />
                        <Route path={routes.home.home} component={HomeRouter} />
                        <Route component={PageNotFound} />
                    </Switch>
                );
        }
    };

    return <div style={{ backgroundColor: color().background }}>{renderContent()}</div>;
};

const mapStateToProps = ({ auth }: any) => {
    return { auth };
};

const RouterComponent = connect(mapStateToProps)(withRouter<any, typeof RouterComponentBase>(RouterComponentBase));

export { RouterComponent };
