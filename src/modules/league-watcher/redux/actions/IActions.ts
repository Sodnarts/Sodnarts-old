import { FETCH_MATCH_HISTORY, LOAD_MORE, SET_PAGINATION } from 'src/modules/league-watcher/redux/actions/types';

interface IPagination {
    summonerName: string;
    position: number;
}

interface IBannedChamp {
    championId: number;
    pickTurn: number;
}

export interface IParticipant {
    assists: number;
    champLevel: number;
    championId: number;
    championName: string;
    deaths: number;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    kills: number;
    largestMultiKill: number;
    minions: number;
    spell1: string;
    spell2: string;
    summonerName: string;
    teamId: number;
}

export interface IMatch {
    gameCreation: number;
    gameDuration: number;
    mapId: number;
    mapName: string;
    participant: IParticipant[];
    queueId: number;
    queueName: string;
    selfName: string;
    teamOneBans: IBannedChamp[];
    teamTwoBans: IBannedChamp[];
    winningTeam: number;
}

export interface IMatchHistoryAction {
    type: typeof FETCH_MATCH_HISTORY;
    payload: IMatch[];
}

export interface ISetPaginationAction {
    type: typeof SET_PAGINATION;
    payload: IPagination;
}

export interface ILoadMoreAction {
    type: typeof LOAD_MORE;
    payload: IMatch[];
}
