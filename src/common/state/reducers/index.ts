import { combineReducers, Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { alertReducer } from 'src/common/state/reducers/alertReducer';
import { authReducer } from 'src/common/state/reducers/authReducer';
import { IRootState } from 'src/common/state/reducers/IState';
import { progressBarReducer } from 'src/common/state/reducers/progressBarReducer';
import { surveysReducer } from 'src/common/state/reducers/surveysReducer';
import { toggleMenuReducer } from 'src/common/state/reducers/toggleMenuReducer';
import { leagueReducer } from 'src/modules/league-watcher/redux/reducers/';
import { accountReducer } from 'src/modules/my-account/redux/reducers';
import { webShopReducer } from 'src/modules/web-shop/redux/webShopReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['webShop'],
};

const combinedReducers: Reducer<IRootState> = combineReducers({
    account: accountReducer,
    alert: alertReducer,
    auth: authReducer,
    league: leagueReducer,
    progressBar: progressBarReducer,
    surveys: surveysReducer,
    toggleMenu: toggleMenuReducer,
    webShop: webShopReducer,
});

export const rootReducer = persistReducer(persistConfig, combinedReducers);
