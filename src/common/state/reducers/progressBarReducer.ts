import { TOGGLE_PROGRESS_BAR } from 'src/common/state/actions/types';

export const progressBarReducer = (state = 0, action: any) => {
    switch (action.type) {
        case TOGGLE_PROGRESS_BAR:
            return state + (!!action.payload ? 1 : -1);
        default:
            return state;
    }
};
