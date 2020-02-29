import { FETCH_USERS } from 'src/modules/user-admin/redux/actions/types';

export interface IUserAdminObject {
    firstName: string;
    roles: string[];
    googleName: string;
    _id: string;
}

export interface IGetUsersAction {
    type: typeof FETCH_USERS;
    payload: IUserAdminObject[];
}
