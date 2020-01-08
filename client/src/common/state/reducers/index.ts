import { combineReducers } from 'redux';
import { alertReducer } from 'src/common/state/reducers/alertReducer';
import { authReducer } from 'src/common/state/reducers/authReducer';
import { languageReducer } from 'src/common/state/reducers/languageReducer';
import { surveysReducer } from 'src/common/state/reducers/surveysReducer';
import { themeReducer } from 'src/common/state/reducers/themeReducer';
import { toggleMenuReducer } from 'src/common/state/reducers/toggleMenuReducer';

export const rootReducer = combineReducers({
    alert: alertReducer,
    auth: authReducer,
    language: languageReducer,
    surveys: surveysReducer,
    theme: themeReducer,
    toggleMenu: toggleMenuReducer,
});
