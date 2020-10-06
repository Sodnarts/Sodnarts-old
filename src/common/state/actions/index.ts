import axios from 'axios';
import { Token } from 'react-stripe-checkout';
import { Dispatch } from 'redux';
import { routes } from 'src/common/globals/routes/routes';
import {
    IDismissAlertAction,
    IFetchSurveysAction,
    IFetchUserAction,
    IShowAlertAction,
    ISubmitSurvey,
    IToggleMenuAction,
    IToggleProgressBarAction,
} from 'src/common/state/actions/IActions';
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

export const fetchUser = () => async (dispatch: Dispatch<IFetchUserAction | IToggleProgressBarAction>) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    const response = await axios.get(routes.api.currentUser);
    dispatch({ type: FETCH_LANGUAGE, payload: response.data.language });
    dispatch({ type: FETCH_THEME, payload: response.data.theme });
    dispatch({ type: FETCH_USER, payload: response.data });
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
};

export const logOut = () => async (dispatch: Dispatch<IFetchUserAction | IToggleProgressBarAction>) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    const response = await axios.get(routes.auth.logout);
    dispatch({ type: FETCH_LANGUAGE, payload: response.data });
    dispatch({ type: FETCH_THEME, payload: response.data });
    dispatch({ type: FETCH_USER, payload: response.data });
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
};

export const handleToken = (token: Token) => async (
    dispatch: Dispatch<IFetchUserAction | IToggleProgressBarAction>,
) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    const response = await axios.post(routes.api.stripe, token);
    dispatch({ type: FETCH_USER, payload: response.data });
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
};

export const submitSurvey = (values: ISubmitSurvey) => async (
    dispatch: Dispatch<IFetchSurveysAction | IToggleProgressBarAction | IShowAlertAction>,
) => {
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

export const fetchSurveys = () => async (dispatch: Dispatch<IFetchSurveysAction | IToggleProgressBarAction>) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    const response = await axios.get(routes.api.surveys);
    dispatch({ type: FETCH_SURVEYS, payload: response.data });
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
};

export const showAlert = (message: string, type: AlertType) => ({
    payload: { message, type },
    type: SHOW_ALERT,
});

export const dismissAlert = () => (dispatch: Dispatch<IDismissAlertAction>) => {
    dispatch({ type: DISMISS_ALERT });
};

export const toggleModulesMenu = () => (dispatch: Dispatch<IToggleMenuAction>) => {
    dispatch({ type: TOGGLE_MENU });
};

export const toggleProgressBar = (show: boolean) => (dispatch: Dispatch<IToggleProgressBarAction>) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: show });
};
