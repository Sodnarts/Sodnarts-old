import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import reduxThunk from 'redux-thunk';
import { rootReducer } from 'src/common/state/reducers';
// import logger from 'redux-logger';

const middlewares = [reduxThunk];

if (process.env.NODE_ENV === 'development') {
    //middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
