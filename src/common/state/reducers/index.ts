import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { alertReducer } from 'src/common/state/reducers/alertReducer';
import { authReducer } from 'src/common/state/reducers/authReducer';
import { languageReducer } from 'src/common/state/reducers/languageReducer';
import { progressBarReducer } from 'src/common/state/reducers/progressBarReducer';
import { surveysReducer } from 'src/common/state/reducers/surveysReducer';
import { themeReducer } from 'src/common/state/reducers/themeReducer';
import { toggleMenuReducer } from 'src/common/state/reducers/toggleMenuReducer';
import { leaguePaginationReducer } from 'src/modules/league-watcher/redux/reducers/leaguePaginationReducer';
import { matchHistoryReducer } from 'src/modules/league-watcher/redux/reducers/matchHistoryReducer';
import cartReducer from 'src/modules/web-shop/redux/cart/cart.reducer';
import { directoryReducer } from 'src/modules/web-shop/redux/directory/directory.reducer';
import { shopReducer } from 'src/modules/web-shop/redux/shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const combinedReducers = combineReducers({
    alert: alertReducer,
    auth: authReducer,
    cart: cartReducer,
    directory: directoryReducer,
    language: languageReducer,
    leaguePagination: leaguePaginationReducer,
    matchHistory: matchHistoryReducer,
    progressBar: progressBarReducer,
    shop: shopReducer,
    surveys: surveysReducer,
    theme: themeReducer,
    toggleMenu: toggleMenuReducer,
});

export const rootReducer = persistReducer(persistConfig, combinedReducers);
