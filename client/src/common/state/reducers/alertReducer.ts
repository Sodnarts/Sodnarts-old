import { DISMISS_ALERT, SHOW_ALERT } from 'src/common/state/actions/types';

const INITIAL_STATE = {
    isOpen: false,
    message: '',
};
export const alertReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                isOpen: true,
                message: action.payload,
            };
        case DISMISS_ALERT:
            return {
                isOpen: false,
                message: '',
            };
        default:
            return state;
    }
};
