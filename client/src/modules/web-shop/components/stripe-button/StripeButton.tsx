import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { sendPayment } from 'src/modules/web-shop/redux/cart/cart.actions';

interface IProps {
    price: any;
    sendPayment: (token: string, price: number) => void;
}

const StripeCheckoutButtonBase = ({ price, ...props }: IProps) => {
    const lang = getLanguageFile();
    const priceForStripe = price * 100;

    const retrieveStripeKey = () => {
        if (!!process.env.REACT_APP_STRIPE_KEY) {
            return process.env.REACT_APP_STRIPE_KEY;
        }
        return 'Missing key';
    };

    const onToken = (token: any) => {
        props.sendPayment(token, priceForStripe);
    };

    return (
        <StripeCheckout
            amount={priceForStripe}
            description={`${lang.webShop.common.stripeButtonDesc}${price}`}
            image="https://svgshare.com/i/CUz.svg"
            label={`${lang.webShop.common.stripeButtonTitle}`}
            name="E-Commerce"
            panelLabel={`${lang.webShop.common.stripeButtonTitle}`}
            // tslint:disable-next-line: jsx-no-lambda
            token={onToken}
            stripeKey={retrieveStripeKey()}
        />
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    sendPayment: (token: string, price: number) => dispatch(sendPayment(token, price)),
});

const StripeCheckoutButton = connect(null, mapDispatchToProps)(StripeCheckoutButtonBase);

export { StripeCheckoutButton };
