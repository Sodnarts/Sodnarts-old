import React from 'react';
import 'src/modules/web-shop/components/cart/cart-item/CartItemStyles.scss';
import { ICartItem } from 'src/modules/web-shop/redux/cart/ICart';

interface IProps {
    item: ICartItem;
}

const CartItemBase = ({ item: { imageUrl, price, name, quantity } }: IProps) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {quantity} x ${price}
            </span>
        </div>
    </div>
);

const CartItem = React.memo(CartItemBase);

export { CartItem };
