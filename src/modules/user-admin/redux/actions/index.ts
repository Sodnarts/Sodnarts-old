import axios from 'axios';
import { Dispatch } from 'react';
import { routes } from 'src/common/globals/routes/routes';
import { IToggleProgressBarAction } from 'src/common/state/actions/IActions';
import { TOGGLE_PROGRESS_BAR } from 'src/common/state/actions/types';
import { IGetUsersAction, IUserAdminObject } from 'src/modules/user-admin/redux/actions/IActions';
import { FETCH_USERS, UPDATE_ROLES } from 'src/modules/user-admin/redux/actions/types';

export const fetchUsers = () => async (dispatch: Dispatch<IGetUsersAction | IToggleProgressBarAction>) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    const response = await axios.get(routes.api.userAdmin);
    dispatch({ type: FETCH_USERS, payload: response.data });
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
};

export const updateUserRoles = (user: IUserAdminObject) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: true });
    const response = await axios.post(routes.api.userAdmin, user);
    dispatch({ type: FETCH_USERS, payload: response.data });
    dispatch({ type: TOGGLE_PROGRESS_BAR, payload: false });
};
