import { IToggleProgressBarAction } from 'src/common/state/actions/IActions';
import { TOGGLE_PROGRESS_BAR } from 'src/common/state/actions/types';
import { IProgressBarState } from 'src/common/state/reducers/IState';

export const progressBarReducer = (state: IProgressBarState = 0, action: IToggleProgressBarAction) => {
    switch (action.type) {
        case TOGGLE_PROGRESS_BAR:
            return state + (!!action.payload ? 1 : -1);
        default:
            return state;
    }
};
