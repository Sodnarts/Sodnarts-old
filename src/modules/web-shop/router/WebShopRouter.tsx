import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { UnauthorizedAccess } from 'src/common/error-pages/UnauthorizedAccess';
import { routes } from 'src/common/globals/routes/routes';
import { IAuthState, IRootState } from 'src/common/state/reducers/IState';
import { CheckoutPage } from 'src/modules/web-shop/components/checkout/CheckoutPage';
import { ShopPage } from 'src/modules/web-shop/components/shop/Shop';
import { WebShopPage } from 'src/modules/web-shop/components/WebShopPage';
import 'src/modules/web-shop/router/ModuleStyles.scss';

interface IProps {
    auth: IAuthState;
}

/**
 *
 *
 * @class WebShopRouter
 * @extends {React.Component}
 */
const WebShopRouterBase = ({ auth }: IProps) => {
    const renderContent = () => {
        if (auth && (auth.roles.includes('Web-Shop') || auth.roles.includes('Admin') || auth.roles.includes('Owner'))) {
            return (
                <Switch>
                    <Route exact={true} path={routes.webShop.home} component={WebShopPage} />
                    <Route path={routes.webShop.shop} component={ShopPage} />
                    <Route path={routes.webShop.checkout} component={CheckoutPage} />
                    <Redirect to={routes.webShop.home} />
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
            <div className="web-shop-container" style={{ position: 'relative' }}>
                {renderContent()}
            </div>
        </div>
    );
};

const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

const WebShopRouter = connect(mapStateToProps)(WebShopRouterBase);

export { WebShopRouter };
