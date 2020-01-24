import { FETCH_LANGUAGE } from 'src/common/state/actions/types';

export const languageReducer = (state = null, action: any) => {
    switch (action.type) {
        case FETCH_LANGUAGE:
            return !!action.payload.language ? action.payload.language : null;
        default:
            return state;
    }
};
