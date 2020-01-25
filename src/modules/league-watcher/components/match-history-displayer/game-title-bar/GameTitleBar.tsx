import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import { TeamChart } from 'src/modules/league-watcher/components/match-history-displayer/game-title-bar/TeamChart';
import { calculateKDA } from 'src/modules/league-watcher/components/match-history-displayer/utils/calculateKDA';
import { getSummoner } from 'src/modules/league-watcher/components/match-history-displayer/utils/getSummoner';
import { trimName } from 'src/modules/league-watcher/components/match-history-displayer/utils/trimName';

interface IProps {
    game: any;
}

interface IState {
    player: any;
}

class GameTitleBarBase extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            player: getSummoner(props.game),
        };
    }

    public convertGameDuration = () => {
        const { game } = this.props;

        const mm = Math.floor(game.gameDuration / 60);
        const ss = game.gameDuration % 60;

        return `${mm}m ${ss}s`;
    };

    public render() {
        const { game } = this.props;
        const { player } = this.state;

        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 'auto',
                        marginTop: 'auto',
                        width: '15%',
                    }}
                >
                    <p style={{ margin: '0px' }}>{game.mapName}</p>
                    <p style={{ margin: '0px' }}>{game.queueName}</p>
                    <p style={{ margin: '0px' }}>{this.convertGameDuration()}</p>
                </div>
                <Avatar
                    style={{ margin: 'auto', marginLeft: '50px', height: '64px', width: '64px' }}
                    src={`/champion/${trimName(player.championName)}.png`}
                />
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '12px' }}>
                    <Avatar
                        style={{ width: '30px', height: '30px', marginBottom: '4px' }}
                        variant="rounded"
                        src={`/summonerspells/${player.spell1}.png`}
                    />
                    <Avatar
                        style={{ width: '30px', height: '30px', marginTop: '4px' }}
                        variant="rounded"
                        src={`/summonerspells/${player.spell2}.png`}
                    />
                </div>
                <div
                    style={{ margin: 'auto', marginLeft: '5px', flexGrow: 2, display: 'flex', flexDirection: 'column' }}
                >
                    <Typography variant="h6" style={{ margin: '0px', fontSize: '22' }}>
                        {`${player.kills} / ${player.deaths} / ${player.assists}`}
                    </Typography>
                    <Typography variant="body1">{calculateKDA(player)}</Typography>
                </div>
                <TeamChart game={game} />
            </div>
        );
    }
}

const GameTitleBar = GameTitleBarBase;

export { GameTitleBar };
