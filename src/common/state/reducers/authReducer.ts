import { IFetchUserAction } from 'src/common/state/actions/IActions';
import { FETCH_USER } from 'src/common/state/actions/types';
import { IAuthState } from 'src/common/state/reducers/IState';

export const authReducer = (state: IAuthState = null, action: IFetchUserAction) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
};
