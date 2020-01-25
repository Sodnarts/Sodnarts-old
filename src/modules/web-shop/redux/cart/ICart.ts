import {
    ADD_ITEM,
    CLEAR_CART,
    CLEAR_ITEM_FROM_CART,
    REMOVE_ITEM,
    TOGGLE_CART_HIDDEN,
} from 'src/modules/web-shop/redux/cart/cart.types';

export interface ICartItem {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
}

export interface ICart {
    hidden: boolean;
    cartItems: ICartItem[];
}

export interface ICartState {
    cartItems: ICartItem[];
    hidden: boolean;
}

export interface ICartAddItemAction {
    type: typeof ADD_ITEM;
    payload: ICartItem;
}

export interface ICartRemoveItemAction {
    type: typeof REMOVE_ITEM;
    payload: ICartItem;
}

export interface ICartClearItemAction {
    type: typeof CLEAR_ITEM_FROM_CART;
    payload: ICartItem;
}

export interface ICartClearCartAction {
    type: typeof CLEAR_CART;
}

export interface ICartToggleCartHidden {
    type: typeof TOGGLE_CART_HIDDEN;
}
