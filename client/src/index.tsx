import 'materialize-css/dist/css/materialize.min.css'; // Hmm?
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { App } from 'src/app-setup/App';
import { rootReducer } from 'src/common/state/reducers';

export const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'),
);
