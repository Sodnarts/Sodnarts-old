import { FETCH_MATCH_HISTORY, LOAD_MORE } from 'src/modules/league-watcher/redux/actions/types';

export const matchHistoryReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case FETCH_MATCH_HISTORY:
            return action.payload;
        case LOAD_MORE:
            return [...state, ...action.payload];
        default:
            return state;
    }
};
