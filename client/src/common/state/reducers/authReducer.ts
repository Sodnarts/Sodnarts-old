import { FETCH_USER } from 'src/common/state/actions/types';

export const authReducer = (state = null, action: any) => {
    switch (action.type) {
        case FETCH_USER:
            console.log('USER REDUCER: ', action.payload);
            return action.payload || false;
        default:
            return state;
    }
};
