import axios from 'axios';
import { routes } from 'src/common/globals/routes/routes';
import { showAlert } from 'src/common/state/actions';
import { AlertType } from 'src/common/state/actions/types';
import {
    ADD_ITEM,
    CLEAR_CART,
    CLEAR_ITEM_FROM_CART,
    REMOVE_ITEM,
    TOGGLE_CART_HIDDEN,
} from 'src/modules/web-shop/redux/cart/cart.types';

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item: any) => ({
    payload: item,
    type: ADD_ITEM,
});

export const clearItemFromCart = (item: any) => ({
    payload: item,
    type: CLEAR_ITEM_FROM_CART,
});

export const removeItem = (item: any) => ({
    payload: item,
    type: REMOVE_ITEM,
});

export const clearCart = () => ({
    type: CLEAR_CART,
});

export const sendPayment = (token: any, price: number) => async (dispatch: any) => {
    const params = { token, price };
    try {
        const response = await axios.post(routes.api.webShop, params);
        if (response.data === 'success') {
            dispatch(showAlert('Payment was successful', AlertType.info));
            dispatch(clearCart());
        }
    } catch (error) {
        dispatch(showAlert(error.response.data.error, AlertType.error));
    }
};
