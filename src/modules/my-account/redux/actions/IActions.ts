import { FETCH_LANGUAGE, FETCH_THEME } from 'src/common/state/actions/types';
import { IColor } from 'src/common/utils/getColor';
import { ILanguageState } from 'src/modules/my-account/redux/reducers/languageReducer';

export interface ITheme {
    theme: string;
}

export interface ILanguage {
    language: string;
}

export interface IAccount {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNo?: string;
    address?: string;
    city?: string;
}

export interface IChangeThemeAction {
    type: typeof FETCH_THEME;
    payload: string;
}

export interface IChangeLanguageAction {
    type: typeof FETCH_LANGUAGE;
    payload: string;
}

export interface IAccountState {
    language: ILanguageState;
    theme: IColor;
}
