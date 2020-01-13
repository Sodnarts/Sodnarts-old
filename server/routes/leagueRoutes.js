const requireLogin = require('../middlewares/requireLogin');
const axios = require('axios');
const keys = require('../config/keys');
const champions = require('../league-models/championIdToName.json');
const items = require('../league-models/itemIdToName.json');

module.exports = (app) => {
    app.get('/api/league/summoner', async (req, res) => {
        const summoner = await axios.get(
            `${keys.baseURL}/summoner/v4/summoners/by-name/autofilled%20jungl%C3%A9?api_key=${keys.leagueApiKey}`,
        );

        const matchList = await axios.get(
            `${keys.baseURL}/match/v4/matchlists/by-account/${summoner.data.accountId}?endIndex=5&beginIndex=0&api_key=${keys.leagueApiKey}`,
        );

        const matchDetailsArray = [];

        for (let i = 0; i < matchList.data.matches.length; i++) {
            const matchDetails = await axios.get(
                `${keys.baseURL}/match/v4/matches/${matchList.data.matches[i].gameId}?api_key=${keys.leagueApiKey}`,
            );
            matchDetailsArray.push(matchDetails.data);
        }

        const response = [];

        for (let i = 0; i < matchDetailsArray.length; i++) {
            let winningTeam = 1;
            if (matchDetailsArray[i].teams[1].win == 'Win') {
                winningTeam = 2;
            }

            const match = {
                //selfName: req.body.summonerName,
                mapId: matchDetailsArray[i].mapId,
                gameCreation: matchDetailsArray[i].gameCreation,
                gameDuration: matchDetailsArray[i].gameDuration,
                queueId: matchDetailsArray[i].queueId,
                gameMode: matchDetailsArray[i].gameMode,
                gameType: matchDetailsArray[i].gameType,
                winningTeam: winningTeam,
                teamOneBans: matchDetailsArray[i].teams[0].bans,
                teamTwoBans: matchDetailsArray[i].teams[1].bans,
                participants: getParticipants(matchDetailsArray[i]),
            };
            response.push(match);
        }
        res.send(response);
    });

    function getParticipants(match) {
        const arr = [];
        for (let i = 0; i < match.participants.length; i++) {
            const participant = {
                teamId: match.participants[i].teamId,
                championId: match.participants[i].championId,
                championName: champions[match.participants[i].championId],
                championImgPath: `../server/league-models/champion/${
                    !!champions[match.participants[i].championId]
                        ? champions[match.participants[i].championId]
                              .replace("'", '')
                              .replace(' ', '')
                              .replace('.', '')
                        : 'undefined'
                }.png`,
                spell1Id: match.participants[i].spell1Id,
                spell2Id: match.participants[i].spell2Id,
                item0: items[match.participants[i].stats.item0],
                item1: items[match.participants[i].stats.item1],
                item2: items[match.participants[i].stats.item2],
                item3: items[match.participants[i].stats.item3],
                item4: items[match.participants[i].stats.item4],
                item5: items[match.participants[i].stats.item5],
                item6: items[match.participants[i].stats.item6],
                kills: match.participants[i].stats.kills,
                deaths: match.participants[i].stats.deaths,
                assists: match.participants[i].stats.assists,
                largestMultiKill: match.participants[i].stats.largestMultiKill,
                champLevel: match.participants[i].stats.champLevel,
                minions: match.participants[i].stats.totalMinionsKilled,
                summonerName: match.participantIdentities[i].player.summonerName,
            };
            arr.push(participant);
        }

        return arr;
    }
};
