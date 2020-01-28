import { ICartItem } from 'src/modules/web-shop/redux/cart/ICart';

export const addItemToCart = (cartItems: ICartItem[], cartItemToAdd: ICartItem): ICartItem[] => {
    const existingCartItem = cartItems.find((cartItem: ICartItem): boolean => cartItem.id === cartItemToAdd.id);

    if (!!existingCartItem) {
        return cartItems.map(
            (cartItem: ICartItem): ICartItem =>
                cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems: ICartItem[], cartItemToRemove: ICartItem): ICartItem[] => {
    const existingCartItem = cartItems.find((cartItem: ICartItem): boolean => cartItem.id === cartItemToRemove.id);

    if (!!existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem: ICartItem): boolean => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem: ICartItem) =>
        cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
    );
};
