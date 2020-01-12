import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PageNotFound } from 'src/common/error-pages/PageNotFound';
import { routes } from 'src/common/globals/routes/routes';
import { CheckoutPage } from 'src/modules/web-shop/components/checkout/CheckoutPage';
import { ShopPage } from 'src/modules/web-shop/components/shop/Shop';
import { WebShopPage } from 'src/modules/web-shop/components/WebShopPage';
import 'src/modules/web-shop/router/ModuleStyles.scss';

/**
 *
 *
 * @class WebShopRouter
 * @extends {React.Component}
 */
const WebShopRouterBase = () => (
    <div>
        <div className="web-shop-container" style={{ position: 'relative' }}>
            <Switch>
                <Route exact={true} path={routes.webShop.home} component={WebShopPage} />
                <Route path={routes.webShop.shop} component={ShopPage} />
                <Route path={routes.webShop.checkout} component={CheckoutPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </div>
);

const mapStateToProps = ({ auth }: any) => {
    return { auth };
};

const WebShopRouter = connect(mapStateToProps)(WebShopRouterBase);

export { WebShopRouter };
