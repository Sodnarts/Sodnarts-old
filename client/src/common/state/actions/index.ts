import axios from 'axios';
import { routes } from 'src/common/globals/routes/routes';
import { FETCH_LANGUAGE, FETCH_SURVEYS, FETCH_THEME, FETCH_USER } from 'src/common/state/actions/types';

export const fetchUser = () => async (dispatch: any) => {
    const response = await axios.get(routes.api.currentUser);
    dispatch({ type: FETCH_LANGUAGE, payload: response.data });
    dispatch({ type: FETCH_THEME, payload: response.data });
    dispatch({ type: FETCH_USER, payload: response.data });
};

export const handleToken = (token: any) => async (dispatch: any) => {
    const response = await axios.post(routes.api.stripe, token);
    dispatch({ type: FETCH_USER, payload: response.data });
};

export const submitSurvey = (values: any, history: any) => async (dispatch: any) => {
    const response = await axios.post(routes.api.surveys, values);
    history.push(routes.emailService.emailDashboard);
    dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchSurveys = () => async (dispatch: any) => {
    const response = await axios.get(routes.api.surveys);
    dispatch({ type: FETCH_SURVEYS, payload: response.data });
};

export const changeTheme = (theme: any) => async (dispatch: any) => {
    const response = await axios.post(routes.api.theme, theme);
    dispatch({ type: FETCH_THEME, payload: response.data });
    dispatch({ type: FETCH_USER, payload: response.data });
};

export const changeLanguage = (language: any) => async (dispatch: any) => {
    const response = await axios.post(routes.api.language, language);
    dispatch({ type: FETCH_LANGUAGE, payload: response.data });
    dispatch({ type: FETCH_USER, payload: response.data });
};

export const changeAccountSettings = (value: any) => async (dispatch: any) => {
    console.log(value);
    const response = await axios.post(routes.api.account, value);
    console.log(response);
    dispatch({ type: FETCH_USER, payload: response.data });
};