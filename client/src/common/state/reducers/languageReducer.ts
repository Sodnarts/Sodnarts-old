import { FETCH_LANGUAGE } from 'src/common/state/actions/types';

export const languageReducer = (state = null, action: any) => {
    switch (action.type) {
        case FETCH_LANGUAGE:
            console.log('LANG: ', action.payload);
            return 'no';
        //return !!action.payload ? action.payload.language : state;
        default:
            return state;
    }
};
