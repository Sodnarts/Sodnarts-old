import axios from 'axios';
import { Dispatch } from 'redux';
import { routes } from 'src/common/globals/routes/routes';
import { IFetchUserAction, IToggleProgressBarAction } from 'src/common/state/actions/IActions';
import { FETCH_LANGUAGE, FETCH_THEME, FETCH_USER, TOGGLE_PROGRESS_BAR } from 'src/common/state/actions/types';
import {
    IAccount,
    IChangeLanguageAction,
    IChangeThemeAction,
    ILanguage,
    ITheme,
} from 'src/modules/my-account/redux/actions/IActions';

export const changeTheme = (theme: ITheme) => async (
    dispatch: Dispatch<IToggleProgressBarAction | IFetchUserAction | IChangeThemeAction>,
) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    const response = await axios.post(routes.api.theme, theme);
    dispatch({ type: FETCH_THEME, payload: response.data.theme });
    dispatch({ type: FETCH_USER, payload: response.data });
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
};

export const changeLanguage = (language: ILanguage) => async (
    dispatch: Dispatch<IToggleProgressBarAction | IFetchUserAction | IChangeLanguageAction>,
) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    const response = await axios.post(routes.api.language, language);
    dispatch({ type: FETCH_LANGUAGE, payload: response.data.language });
    dispatch({ type: FETCH_USER, payload: response.data });
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
};

export const changeAccountSettings = (value: IAccount) => async (
    dispatch: Dispatch<IToggleProgressBarAction | IFetchUserAction>,
) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    const response = await axios.post(routes.api.account, value);
    dispatch({ type: FETCH_USER, payload: response.data });
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
};
