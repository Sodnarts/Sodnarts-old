import {
    ICartAddItemAction,
    ICartClearCartAction,
    ICartClearItemAction,
    ICartItem,
    ICartRemoveItemAction,
    ICartState,
    ICartToggleCartHidden,
} from 'src/modules/web-shop/redux/cart/ICart';
import { ADD_ITEM, CLEAR_CART, CLEAR_ITEM_FROM_CART, REMOVE_ITEM, TOGGLE_CART_HIDDEN } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE: ICartState = {
    cartItems: [],
    hidden: true,
};

type IReducer = ICartAddItemAction &
    ICartRemoveItemAction &
    ICartClearItemAction &
    ICartClearCartAction &
    ICartToggleCartHidden;

const cartReducer = (state = INITIAL_STATE, action: IReducer) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem: ICartItem) => cartItem.id !== action.payload.id),
            };
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            };
        case CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            };
        default:
            return state;
    }
};

export { cartReducer };
