import { IGetUsersAction } from 'src/modules/user-admin/redux/actions/IActions';
import { FETCH_USERS } from 'src/modules/user-admin/redux/actions/types';
import { IUsersState } from 'src/modules/user-admin/redux/reducers/IState';

const INITIAL_STATE: IUsersState = [];

export const usersReducer = (state = INITIAL_STATE, action: IGetUsersAction) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;
        default:
            return state;
    }
};
