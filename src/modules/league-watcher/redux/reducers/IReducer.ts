import { IMatchHistoryState } from 'src/modules/league-watcher/redux/reducers/matchHistoryReducer';

export interface ILeaguePaginationState {
    summonerName: string;
    position: number;
}

export interface ILeagueState {
    leaguePagination: ILeaguePaginationState;
    matchHistory: IMatchHistoryState;
}
