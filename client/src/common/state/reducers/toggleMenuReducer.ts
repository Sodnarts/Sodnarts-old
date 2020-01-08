import { TOGGLE_MENU } from 'src/common/state/actions/types';

export const toggleMenuReducer = (state = false, action: any) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return !state;
        default:
            return state;
    }
};
