import { combineReducers, Reducer } from 'redux';
import { IAccountState } from 'src/modules/my-account/redux/actions/IActions';
import { languageReducer } from 'src/modules/my-account/redux/reducers/languageReducer';
import { themeReducer } from 'src/modules/my-account/redux/reducers/themeReducer';

const accountReducer: Reducer<IAccountState> = combineReducers({
    language: languageReducer,
    theme: themeReducer,
});

export { accountReducer };
