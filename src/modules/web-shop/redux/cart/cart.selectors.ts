import { createSelector } from 'reselect';
import { ICart, ICartItem } from 'src/modules/web-shop/redux/cart/ICart';

// TODO: Come back once EVERY reducer has it's type and add IGlobalState
const selectCart = (state: any): any => state.cart;

const selectTheme = (state: any): any => state.theme;
// TODO: Come back once Theme has it's own type -- It is regular application white theme reducer stuff
export const selectThemeItems = createSelector([selectTheme], (theme: any): any => theme);

export const selectCartItems = createSelector([selectCart], (cart: ICart): ICartItem[] => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], (cart: ICart): boolean => cart.hidden);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems: ICartItem[]): number =>
    cartItems.reduce(
        (accumulatedQuantity: any, cartItem: ICartItem): number => accumulatedQuantity + cartItem.quantity,
        0,
    ),
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce(
        (accumulatedQuantity: number, cartItem: ICartItem): number =>
            accumulatedQuantity + cartItem.quantity * cartItem.price,
        0,
    ),
);
