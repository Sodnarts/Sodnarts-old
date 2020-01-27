import { IAuthState } from 'src/common/state/reducers/IState';
import { IAccountState } from 'src/modules/my-account/redux/actions/IActions';

/**
 *
 * @export
 * @interface IAuthenticationProps
 */
export interface IAuthenticationProps {
    auth: IAuthState;
    account: IAccountState;
}

export interface IUser {
    address: string;
    city: string;
    credits: number;
    email: string;
    firstName: string;
    googleID: string;
    googleName: string;
    language: string;
    lastName: string;
    phoneNo: string;
    theme: string;
    __v: number;
    id: string;
}
