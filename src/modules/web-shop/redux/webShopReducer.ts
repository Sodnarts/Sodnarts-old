import { combineReducers, Reducer } from 'redux';
import { cartReducer } from 'src/modules/web-shop/redux/cart/cart.reducer';
import { ICartState } from 'src/modules/web-shop/redux/cart/ICart';
import { directoryReducer, IDirectoryState } from 'src/modules/web-shop/redux/directory/directory.reducer';
import { ICollectionState } from 'src/modules/web-shop/redux/shop/IShop';
import { shopReducer } from 'src/modules/web-shop/redux/shop/shop.reducer';

export interface IWebShopState {
    cart: ICartState;
    directory: IDirectoryState;
    shop: ICollectionState;
}

const webShopReducer: Reducer<IWebShopState> = combineReducers({
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

export { webShopReducer };
