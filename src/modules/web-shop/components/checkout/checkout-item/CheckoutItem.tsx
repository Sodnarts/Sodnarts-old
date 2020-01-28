import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import 'src/modules/web-shop/components/checkout/checkout-item/CheckoutItemStyles.scss';
import { addItem, clearItemFromCart, removeItem } from 'src/modules/web-shop/redux/cart/cart.actions';
import {
    ICartAddItemAction,
    ICartClearItemAction,
    ICartItem,
    ICartRemoveItemAction,
} from 'src/modules/web-shop/redux/cart/ICart';

interface IProps {
    item: ICartItem;
    clearItem: (item: ICartItem) => void;
    addItem: (item: ICartItem) => void;
    removeItem: (item: ICartItem) => void;
}

// tslint:disable-next-line: no-shadowed-variable
const CheckoutItemBase = ({ addItem, item, clearItem, removeItem }: IProps) => {
    const { name, imageUrl, quantity, price } = item;

    const handleRemove = () => {
        removeItem(item);
    };

    const handleAdd = () => {
        addItem(item);
    };

    const handleClear = () => {
        clearItem(item);
    };

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={handleRemove}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={handleAdd}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={handleClear}>
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<ICartAddItemAction | ICartClearItemAction | ICartRemoveItemAction>) => ({
    addItem: (item: ICartItem) => dispatch(addItem(item)),
    clearItem: (item: ICartItem) => dispatch(clearItemFromCart(item)),
    removeItem: (item: ICartItem) => dispatch(removeItem(item)),
});

const CheckoutItem = connect(null, mapDispatchToProps)(CheckoutItemBase);

export { CheckoutItem };
