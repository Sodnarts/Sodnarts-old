import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { routes } from 'src/common/globals/routes/routes';
import 'src/modules/web-shop/components/cart/cart-dropdown/CartDropdownStyles.scss';
import { CartItem } from 'src/modules/web-shop/components/cart/cart-item/CartItem';
import { CustomButton } from 'src/modules/web-shop/components/custom-button/CustomButton';
import { toggleCartHidden } from 'src/modules/web-shop/redux/cart/cart.actions';
import { selectCartItems } from 'src/modules/web-shop/redux/cart/cart.selectors';
import { ICartItem, ICartToggleCartHidden } from 'src/modules/web-shop/redux/cart/ICart';

interface IProps {
    cartItems: ICartItem[];
    history: any;
    dispatch: Dispatch<ICartToggleCartHidden>;
}

const CartDropdownBase = ({ cartItems, history, dispatch }: IProps) => {
    const lang = getLanguageFile();

    const handleClick = () => {
        dispatch(toggleCartHidden());
        history.push(routes.webShop.checkout);
    };

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem: ICartItem) => <CartItem key={cartItem.id} item={cartItem} />)
                ) : (
                    <span className="empty-message">{lang.webShop.cart.emptyCart}</span>
                )}
            </div>
            <CustomButton onClick={handleClick}>{lang.webShop.cart.goToCheckout}</CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

const CartDropdown = withRouter(connect(mapStateToProps)(CartDropdownBase));

export { CartDropdown };
