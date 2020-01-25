import { AlertType, SHOW_ALERT } from 'src/common/state/actions/types';

export interface IShowAlertAction {
    type: typeof SHOW_ALERT;
    payload: {
        message: string;
        type: AlertType;
    };
}
