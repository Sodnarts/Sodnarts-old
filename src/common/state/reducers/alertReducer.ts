import { IDismissAlertAction, IShowAlertAction } from 'src/common/state/actions/IActions';
import { AlertType, DISMISS_ALERT, SHOW_ALERT } from 'src/common/state/actions/types';
import { IAlertState } from 'src/common/state/reducers/IState';

const INITIAL_STATE: IAlertState = {
    isOpen: false,
    message: '',
    type: AlertType.error,
};

export const alertReducer = (state = INITIAL_STATE, action: IShowAlertAction & IDismissAlertAction) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                isOpen: true,
                message: action.payload.message,
                type: action.payload.type,
            };
        case DISMISS_ALERT:
            return {
                isOpen: false,
                message: '',
                type: AlertType.error,
            };
        default:
            return state;
    }
};
