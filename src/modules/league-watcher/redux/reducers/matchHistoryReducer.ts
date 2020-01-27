import { ILoadMoreAction, IMatch, IMatchHistoryAction } from 'src/modules/league-watcher/redux/actions/IActions';
import { FETCH_MATCH_HISTORY, LOAD_MORE } from 'src/modules/league-watcher/redux/actions/types';

export type IMatchHistoryState = IMatch[];

export const matchHistoryReducer = (state: IMatchHistoryState = [], action: IMatchHistoryAction & ILoadMoreAction) => {
    switch (action.type) {
        case FETCH_MATCH_HISTORY:
            return action.payload;
        case LOAD_MORE:
            return [...state, ...action.payload];
        default:
            return state;
    }
};
