import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { color } from 'src/common/utils/getColor';
import 'src/modules/web-shop/components/cart/cart-icon/CartIconStyles.scss';
import { CartIconSvg } from 'src/modules/web-shop/components/cart/cart-icon/CartIconSvg';
import { toggleCartHidden } from 'src/modules/web-shop/redux/cart/cart.actions';
import { selectCartItemsCount, selectThemeItems } from 'src/modules/web-shop/redux/cart/cart.selectors';

interface IProps {
    toggleCartHidden: any;
    itemCount: any;
}

// tslint:disable-next-line: no-shadowed-variable
const CartIconBase = ({ toggleCartHidden, itemCount }: IProps) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <CartIconSvg fill={color().text} className="shopping-icon" />
        <span style={{ color: color().text }} className="icon-count">
            {itemCount}
        </span>
    </div>
);

const mapDispatchToProps = (dispatch: any) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state: any) =>
    createStructuredSelector({
        itemCount: selectCartItemsCount,
        theme: selectThemeItems,
    });

const CartIcon = connect(mapStateToProps, mapDispatchToProps)(CartIconBase);

export { CartIcon };
