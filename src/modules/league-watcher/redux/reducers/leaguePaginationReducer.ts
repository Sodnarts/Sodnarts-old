import { SET_PAGINATION } from 'src/modules/league-watcher/redux/actions/types';

export const leaguePaginationReducer = (state = { summonerName: '', position: 0 }, action: any) => {
    switch (action.type) {
        case SET_PAGINATION:
            return action.payload;
        default:
            return state;
    }
};
