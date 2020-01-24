export const getSummoner = (game: any) => {
    let player = null;

    for (let i = 0; i < game.participants.length; i++) {
        if (
            decodeURI(game.selfName)
                .toLowerCase()
                .replace(' ', '') === game.participants[i].summonerName.toLowerCase()
        ) {
            player = game.participants[i];
        }
    }
    return player;
};
