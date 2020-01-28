import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { CheckoutItem } from 'src/modules/web-shop/components/checkout/checkout-item/CheckoutItem';
import 'src/modules/web-shop/components/checkout/CheckoutPageStyles.scss';
import { StripeCheckoutButton } from 'src/modules/web-shop/components/stripe-button/StripeButton';
import { selectCartItems, selectCartTotal } from 'src/modules/web-shop/redux/cart/cart.selectors';
import { ICartItem } from 'src/modules/web-shop/redux/cart/ICart';

interface IProps {
    cartItems: ICartItem[];
    total: number;
}

const CheckoutPageBase = ({ cartItems, total }: IProps) => {
    const lang = getLanguageFile();

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>{lang.webShop.checkout.product}</span>
                </div>
                <div className="header-block">
                    <span>{lang.webShop.checkout.description}</span>
                </div>
                <div className="header-block">
                    <span>{lang.webShop.checkout.quantity}</span>
                </div>
                <div className="header-block">
                    <span>{lang.webShop.checkout.price}</span>
                </div>
                <div className="header-block">
                    <span>{lang.webShop.checkout.remove}</span>
                </div>
            </div>
            {cartItems.map((cartItem: ICartItem) => (
                <CheckoutItem key={cartItem.id} item={cartItem} />
            ))}
            <div className="total">
                <span>
                    {lang.webShop.checkout.total}
                    {total}
                </span>
            </div>
            <div className="test-warning">
                {lang.webShop.checkout.testCardTitle}
                <br />
                {lang.webShop.checkout.testCardInfo}
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

const CheckoutPage = connect(mapStateToProps)(CheckoutPageBase);

export { CheckoutPage };
