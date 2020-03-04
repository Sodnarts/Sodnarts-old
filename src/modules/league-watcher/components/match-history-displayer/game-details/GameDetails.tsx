import { Typography, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';
import { GameDetailsRow } from 'src/modules/league-watcher/components/match-history-displayer/game-details/GameDetailsRow';
import { gameDetailsStyles } from 'src/modules/league-watcher/components/match-history-displayer/game-details/GameDetailsStyles';
import { getSummoner } from 'src/modules/league-watcher/components/match-history-displayer/utils/getSummoner';
import { IMatch, IParticipant } from 'src/modules/league-watcher/redux/actions/IActions';

interface IProps {
    game: IMatch;
}

type IGameDetails = IProps & WithStyles<typeof gameDetailsStyles>;

class GameDetailsBase extends React.Component<IGameDetails> {
    public teamColor = (teamId: number) => {
        if (teamId === 100) {
            return 'Blue Team';
        } else {
            return 'Red Team';
        }
    };

    public getWin = (teamId: number) => {
        const { game, classes } = this.props;

        return (
            <Typography variant="body1" className={classes.winText}>
                <b>{!!(game.winningTeam === teamId) ? 'Victory' : 'Defeat'}</b>
                {` (${this.teamColor(teamId)})`}
            </Typography>
        );
    };
    public getRows = (teamId: number) => {
        const { game } = this.props;
        const rows: JSX.Element[] = [];

        game.participants.forEach((participant: IParticipant) => {
            if (participant.teamId === teamId) {
                rows.push(
                    <GameDetailsRow
                        key={participant.summonerName}
                        participant={participant}
                        didWin={!!(teamId === game.winningTeam) ? true : false}
                        duration={game.gameDuration}
                    />,
                );
            }
        });
        return rows;
    };

    public getHeaders = (teamId: number) => {
        const { game, classes } = this.props;
        const didWin = !!(teamId === game.winningTeam) ? true : false;
        return (
            <div
                className={classes.headerContainer}
                style={{
                    backgroundColor: !!didWin ? '#26c9ff90' : '#ff363680',
                }}
            >
                <div className={classes.winContainer}>{this.getWin(teamId)}</div>
                <Typography className={classes.headerText} variant="body1">
                    KDA
                </Typography>
                <Typography className={classes.headerText} variant="body1">
                    CS
                </Typography>
                <Typography className={classes.itemsHeader} variant="body1">
                    ITEMS
                </Typography>
            </div>
        );
    };

    public render() {
        const { game, classes } = this.props;
        const player = getSummoner(game);
        const enemyId = !!(player.teamId === 100) ? 200 : 100;

        return (
            <div className={classes.container}>
                {this.getHeaders(player.teamId)}
                <div>{this.getRows(player.teamId)}</div>
                {this.getHeaders(enemyId)}
                <div>{this.getRows(enemyId)}</div>
            </div>
        );
    }
}

const GameDetails = withStyles(gameDetailsStyles)(GameDetailsBase);

export { GameDetails };
