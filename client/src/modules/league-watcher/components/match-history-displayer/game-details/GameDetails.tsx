import { Typography } from '@material-ui/core';
import React from 'react';
import { GameDetailsRow } from 'src/modules/league-watcher/components/match-history-displayer/game-details/GameDetailsRow';
import { getSummoner } from 'src/modules/league-watcher/components/match-history-displayer/utils/getSummoner';

interface IProps {
    game: any;
}

class GameDetails extends React.Component<IProps> {
    public teamColor = (teamId: number) => {
        const { game } = this.props;

        if (teamId === 100) {
            return 'Blue Team';
        } else {
            return 'Red Team';
        }
    };

    public getWin = (teamId: number) => {
        const { game } = this.props;

        return (
            <Typography
                variant="body1"
                style={{ margin: '0', padding: '0', textAlign: 'left', whiteSpace: 'nowrap', overflow: 'hidden' }}
            >
                <b>{!!(game.winningTeam === teamId) ? 'Victory' : 'Defeat'}</b>
                {` (${this.teamColor(teamId)})`}
            </Typography>
        );
    };
    public getRows = (teamId: number) => {
        const { game } = this.props;
        const rows: JSX.Element[] = [];

        game.participants.forEach((participant: any) => {
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
        const { game } = this.props;
        const didWin = !!(teamId === game.winningTeam) ? true : false;
        return (
            <div
                style={{
                    backgroundColor: !!didWin ? '#26c9ff90' : '#ff363680',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '0 16px',
                }}
            >
                <div style={{ width: '25%' }}>{this.getWin(teamId)}</div>
                <Typography style={{ margin: 'auto' }} variant="body1">
                    KDA
                </Typography>
                <Typography style={{ margin: 'auto' }} variant="body1">
                    CS
                </Typography>
                <Typography style={{ margin: 'auto 0', width: '224px' }} variant="body1">
                    ITEMS
                </Typography>
            </div>
        );
    };

    public render() {
        const { game } = this.props;
        const player = getSummoner(game);
        const enemyId = !!(player.teamId === 100) ? 200 : 100;

        return (
            <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                {this.getHeaders(player.teamId)}
                <div>{this.getRows(player.teamId)}</div>
                {this.getHeaders(enemyId)}
                <div>{this.getRows(enemyId)}</div>
            </div>
        );
    }
}

export { GameDetails };
