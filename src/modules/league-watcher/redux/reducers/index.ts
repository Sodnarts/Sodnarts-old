import { combineReducers, Reducer } from 'redux';
import {
    ILoadMoreAction,
    IMatchHistoryAction,
    ISetPaginationAction,
} from 'src/modules/league-watcher/redux/actions/IActions';
import { ILeagueState } from 'src/modules/league-watcher/redux/reducers/IReducer';
import { leaguePaginationReducer } from 'src/modules/league-watcher/redux/reducers/leaguePaginationReducer';
import { matchHistoryReducer } from 'src/modules/league-watcher/redux/reducers/matchHistoryReducer';

const leagueReducer: Reducer<
    ILeagueState,
    ISetPaginationAction | (ILoadMoreAction & IMatchHistoryAction)
> = combineReducers({
    leaguePagination: leaguePaginationReducer,
    matchHistory: matchHistoryReducer,
});

export { leagueReducer };
