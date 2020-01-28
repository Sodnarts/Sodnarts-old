import { Avatar } from '@material-ui/core';
import React from 'react';
import { getTimeAgo } from 'src/modules/league-watcher/components/match-history-displayer/utils/getTimeAgo';
import { trimName } from 'src/modules/league-watcher/components/match-history-displayer/utils/trimName';
import { IMatch, IParticipant } from 'src/modules/league-watcher/redux/actions/IActions';

interface IProps {
    game: IMatch;
}

const TeamChart = ({ game }: IProps) => {
    const mapPlayersToIcon = (teamId: number) => {
        const team: JSX.Element[] = [];

        game.participants.forEach((participant: IParticipant) => {
            if (participant.teamId === teamId) {
                team.push(
                    <Avatar
                        key={participant.summonerName}
                        style={{ height: '24px', width: '24px', marginLeft: '4px' }}
                        src={`/champion/${trimName(participant.championName)}.png`}
                    />,
                );
            }
        });

        return team;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', right: '0px' }}>
            <div style={{ marginLeft: 'auto', marginTop: '-8px', flexGrow: 1 }}>{getTimeAgo(game.gameCreation)}</div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>{mapPlayersToIcon(100)}</div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>{mapPlayersToIcon(200)}</div>
        </div>
    );
};

export { TeamChart };
