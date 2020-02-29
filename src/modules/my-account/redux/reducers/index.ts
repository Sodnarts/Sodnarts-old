import { combineReducers, Reducer } from 'redux';
import {
    IAccountState,
    IChangeLanguageAction,
    IChangeThemeAction,
} from 'src/modules/my-account/redux/actions/IActions';
import { languageReducer } from 'src/modules/my-account/redux/reducers/languageReducer';
import { themeReducer } from 'src/modules/my-account/redux/reducers/themeReducer';

const accountReducer: Reducer<IAccountState, IChangeLanguageAction | IChangeThemeAction> = combineReducers({
    language: languageReducer,
    theme: themeReducer,
});

export { accountReducer };
