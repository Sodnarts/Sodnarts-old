import { FETCH_LANGUAGE } from 'src/common/state/actions/types';
import { IChangeLanguageAction } from 'src/modules/my-account/redux/actions/IActions';

export type ILanguageState = string | null;

export const languageReducer = (state: ILanguageState = null, action: IChangeLanguageAction) => {
    switch (action.type) {
        case FETCH_LANGUAGE:
            return !!action.payload ? action.payload : state;
        default:
            return state;
    }
};
