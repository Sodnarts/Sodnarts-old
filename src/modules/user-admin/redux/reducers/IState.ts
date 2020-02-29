import { IUserAdminObject } from '../actions/IActions';

export type IUsersState = IUserAdminObject[];

export interface IUserAdminState {
    users: IUsersState;
}
