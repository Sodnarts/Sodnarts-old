import { IToggleMenuAction } from 'src/common/state/actions/IActions';
import { TOGGLE_MENU } from 'src/common/state/actions/types';
import { IMenuState } from 'src/common/state/reducers/IState';

export const toggleMenuReducer = (state: IMenuState = false, action: IToggleMenuAction) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return !state;
        default:
            return state;
    }
};
