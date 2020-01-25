import { FETCH_SURVEYS } from 'src/common/state/actions/types';

export const surveysReducer = (state = [], action: any) => {
    switch (action.type) {
        case FETCH_SURVEYS:
            return action.payload;
        default:
            return state;
    }
};
