import { IUser } from 'src/common/interface/IAuthentication';
import { ISurvey } from 'src/common/state/actions/IActions';
import { AlertType } from 'src/common/state/actions/types';
import { ILeagueState } from 'src/modules/league-watcher/redux/reducers/IReducer';
import { IAccountState } from 'src/modules/my-account/redux/actions/IActions';
import { IUserAdminState } from 'src/modules/user-admin/redux/reducers/IState';
import { IWebShopState } from 'src/modules/web-shop/redux/webShopReducer';

export interface IAlertState {
    isOpen: boolean;
    message: string;
    type: AlertType;
}

export type IAuthState = IUser | false | null;

export type IProgressBarState = number;

export type ISurveysState = ISurvey[];

export type IMenuState = boolean;

export interface IRootState {
    account: IAccountState;
    alert: IAlertState;
    auth: IAuthState;
    league: ILeagueState;
    progressBar: IProgressBarState;
    surveys: ISurveysState;
    toggleMenu: IMenuState;
    userAdmin: IUserAdminState;
    webShop: IWebShopState;
}
