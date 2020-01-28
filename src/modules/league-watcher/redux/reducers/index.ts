import { combineReducers, Reducer } from 'redux';
import { ILeagueState } from 'src/modules/league-watcher/redux/reducers/IReducer';
import { leaguePaginationReducer } from 'src/modules/league-watcher/redux/reducers/leaguePaginationReducer';
import { matchHistoryReducer } from 'src/modules/league-watcher/redux/reducers/matchHistoryReducer';

const leagueReducer: Reducer<ILeagueState> = combineReducers({
    leaguePagination: leaguePaginationReducer,
    matchHistory: matchHistoryReducer,
});

export { leagueReducer };
