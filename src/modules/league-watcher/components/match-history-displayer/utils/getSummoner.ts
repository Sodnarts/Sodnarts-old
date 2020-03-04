import { IMatch, IParticipant } from 'src/modules/league-watcher/redux/actions/IActions';

export const getSummoner = (game: IMatch): IParticipant => {
    let player = game.participants[0];

    for (let i = 0; i < game.participants.length; i++) {
        if (
            decodeURI(game.selfName)
                .toLowerCase()
                .replace(' ', '') === game.participants[i].summonerName.toLowerCase().replace(' ', '')
        ) {
            player = game.participants[i];
        }
    }
    return player;
};
