import React from 'react';
import 'src/modules/web-shop/components/cart/cart-item/CartItemStyles.scss';

const CartItemBase = ({ item: { imageUrl, price, name, quantity } }: any) => (
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
