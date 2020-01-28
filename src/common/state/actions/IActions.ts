import { IUser } from 'src/common/interface/IAuthentication';
import {
    AlertType,
    DISMISS_ALERT,
    FETCH_SURVEYS,
    FETCH_USER,
    SHOW_ALERT,
    TOGGLE_MENU,
    TOGGLE_PROGRESS_BAR,
} from 'src/common/state/actions/types';

export interface IShowAlertAction {
    type: typeof SHOW_ALERT;
    payload: {
        message: string;
        type: AlertType;
    };
}

export interface IDismissAlertAction {
    type: typeof DISMISS_ALERT;
}

export interface IToggleProgressBarAction {
    type: typeof TOGGLE_PROGRESS_BAR;
    payload: boolean;
}

export interface IFetchUserAction {
    type: typeof FETCH_USER;
    payload: IUser;
}

export interface ISurvey {
    body: string;
    dateSent: string;
    no: number;
    subject: string;
    title: string;
    yes: number;
    __v: number;
    _id: string;
    _user: string;
}

export interface IFetchSurveysAction {
    type: typeof FETCH_SURVEYS;
    payload: ISurvey[];
}

export interface IToggleMenuAction {
    type: typeof TOGGLE_MENU;
}

interface ICard {
    address_city?: null;
    address_country?: null;
    address_line1?: null;
    address_line1_check?: null;
    address_line2?: null;
    address_state?: null;
    address_zip?: null;
    address_zip_check?: null;
    brand: string;
    country: string;
    cvc_check: string;
    dynamic_last4?: null;
    exp_month: number;
    exp_year: number;
    funding: string;
    id: string;
    last4: string;
    metadata: {};
    name: string;
    object: string;
    tokenization_method?: null;
}

export interface IToken {
    card: ICard;
    client_ip: string;
    created: number;
    email: string;
    id: string;
    livemode: boolean;
    object: string;
    type: string;
    used: boolean;
}

export interface ISubmitSurvey {
    body: string;
    recipients: string;
    subject: string;
    title: string;
}
