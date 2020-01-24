import axios from 'axios';
import { routes } from 'src/common/globals/routes/routes';
import {
    AlertType,
    DISMISS_ALERT,
    FETCH_LANGUAGE,
    FETCH_SURVEYS,
    FETCH_THEME,
    FETCH_USER,
    SHOW_ALERT,
    TOGGLE_MENU,
    TOGGLE_PROGRESS_BAR,
} from 'src/common/state/actions/types';

export const fetchUser = () => async (dispatch: any) => {
    console.log('ACTIONS: FETCH USER');
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    const response = await axios.get(routes.api.currentUser, { withCredentials: true });
    console.log('ACTIONS: ', response);
    dispatch({ type: FETCH_LANGUAGE, payload: response.data });
    dispatch({ type: FETCH_THEME, payload: response.data });
    dispatch({ type: FETCH_USER, payload: response.data });
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
};

export const handleToken = (token: any) => async (dispatch: any) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    const response = await axios.post(routes.api.stripe, token);
    dispatch({ type: FETCH_USER, payload: response.data });
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
};

export const submitSurvey = (values: any) => async (dispatch: any) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    try {
        const response = await axios.post(routes.api.surveys, values);
        dispatch({ type: FETCH_USER, payload: response.data.user });
        dispatch({ type: FETCH_SURVEYS, payload: response.data.surveys });
        dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
    } catch (error) {
        dispatch(showAlert(error.response.data.error, AlertType.error));
        dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
    }
};

export const fetchSurveys = () => async (dispatch: any) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    const response = await axios.get(routes.api.surveys);
    dispatch({ type: FETCH_SURVEYS, payload: response.data });
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
};

export const changeTheme = (theme: any) => async (dispatch: any) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    const response = await axios.post(routes.api.theme, theme);
    dispatch({ type: FETCH_THEME, payload: response.data });
    dispatch({ type: FETCH_USER, payload: response.data });
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
};

export const changeLanguage = (language: any) => async (dispatch: any) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    const response = await axios.post(routes.api.language, language);
    dispatch({ type: FETCH_LANGUAGE, payload: response.data });
    dispatch({ type: FETCH_USER, payload: response.data });
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
};

export const changeAccountSettings = (value: any) => async (dispatch: any) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    const response = await axios.post(routes.api.account, value);
    dispatch({ type: FETCH_USER, payload: response.data });
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
};

export const showAlert = (message: string, type: AlertType) => (dispatch: any) => {
    const params = { message, type };
    dispatch({ type: SHOW_ALERT, payload: params });
};

export const dismissAlert = () => (dispatch: any) => {
    dispatch({ type: DISMISS_ALERT });
};

export const toggleModulesMenu = () => (dispatch: any) => {
    dispatch({ type: TOGGLE_MENU });
};

export const toggleProgressBar = (show: boolean) => (dispatch: any) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, show });
};
