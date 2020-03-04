import { Avatar, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import { teamChartStyles } from 'src/modules/league-watcher/components/match-history-displayer/game-title-bar/TeamChartStyles';
import { getTimeAgo } from 'src/modules/league-watcher/components/match-history-displayer/utils/getTimeAgo';
import { trimName } from 'src/modules/league-watcher/components/match-history-displayer/utils/trimName';
import { IMatch, IParticipant } from 'src/modules/league-watcher/redux/actions/IActions';

interface IProps {
    game: IMatch;
}

type ITeamChart = IProps & WithStyles<typeof teamChartStyles>;

const TeamChartBase = ({ game, classes }: ITeamChart) => {
    const mapPlayersToIcon = (teamId: number) => {
        const team: JSX.Element[] = [];

        game.participants.forEach((participant: IParticipant) => {
            if (participant.teamId === teamId) {
                team.push(
                    <Avatar
                        key={participant.summonerName}
                        className={classes.avatar}
                        src={`/champion/${trimName(participant.championName)}.png`}
                    />,
                );
            }
        });

        return team;
    };

    return (
        <div className={classes.container}>
            <div className={classes.timeAgo}>{getTimeAgo(game.gameCreation)}</div>
            <div className={classes.teamRow}>{mapPlayersToIcon(100)}</div>
            <div className={classes.teamRow}>{mapPlayersToIcon(200)}</div>
        </div>
    );
};

const TeamChart = withStyles(teamChartStyles)(TeamChartBase);

export { TeamChart };
