import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { routes } from 'src/common/globals/routes/routes';
import { color } from 'src/common/utils/getColor';
import { CartDropdown } from 'src/modules/web-shop/components/cart/cart-dropdown/CartDropdown';
import { CartIcon } from 'src/modules/web-shop/components/cart/cart-icon/CartIcon';
import 'src/modules/web-shop/header/WebShopHeaderStyles.scss';
import { clearCart } from 'src/modules/web-shop/redux/cart/cart.actions';
import { selectCartHidden } from 'src/modules/web-shop/redux/cart/cart.selectors';

interface IProps {
    hidden: boolean;
}

const WebShopHeaderBase = ({ hidden }: IProps) => {
    const lang = getLanguageFile();

    return (
        <div className="header">
            <div className="options">
                <Link style={{ color: color().text }} className="option" to={routes.webShop.shop}>
                    {lang.header.webShop.shop}
                </Link>
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    clearCart: () => dispatch(clearCart()),
});

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
});

const WebShopHeader = connect(mapStateToProps, mapDispatchToProps)(WebShopHeaderBase);

export { WebShopHeader };
