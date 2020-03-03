import { IAuthState } from 'src/common/state/reducers/IState';
import { IColor } from 'src/common/utils/getColor';

/**
 *
 * @export
 * @interface IAuthenticationProps
 */
export interface IAuthenticationProps {
    auth: IAuthState;
    theme: IColor;
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
    roles: string[];
    favoriteSN: string[];
    theme: string;
    __v: number;
    id: string;
}
