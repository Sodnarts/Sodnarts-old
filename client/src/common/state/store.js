import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { rootReducer } from 'src/common/state/reducers';

export const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
