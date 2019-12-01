import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { authReducer } from 'src/common/state/reducers/authReducer';
import { languageReducer } from 'src/common/state/reducers/languageReducer';
import { surveysReducer } from 'src/common/state/reducers/surveysReducer';
import { themeReducer } from 'src/common/state/reducers/themeReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    form: reduxForm,
    language: languageReducer,
    surveys: surveysReducer,
    theme: themeReducer,
});
