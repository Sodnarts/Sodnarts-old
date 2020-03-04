import { ThemeProvider, Typography, WithStyles, withStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import {
    gameTitleBarStyles,
    typographyTheme,
} from 'src/modules/league-watcher/components/match-history-displayer/game-title-bar/GameTitleBarStyles';
import { TeamChart } from 'src/modules/league-watcher/components/match-history-displayer/game-title-bar/TeamChart';
import { calculateKDA } from 'src/modules/league-watcher/components/match-history-displayer/utils/calculateKDA';
import { getSummoner } from 'src/modules/league-watcher/components/match-history-displayer/utils/getSummoner';
import { trimName } from 'src/modules/league-watcher/components/match-history-displayer/utils/trimName';
import { IMatch, IParticipant } from 'src/modules/league-watcher/redux/actions/IActions';

interface IProps {
    game: IMatch;
}

interface IState {
    player: IParticipant;
}

type IGameTitleBar = IProps & WithStyles<typeof gameTitleBarStyles>;

class GameTitleBarBase extends React.Component<IGameTitleBar, IState> {
    constructor(props: IGameTitleBar) {
        super(props);
        this.state = {
            player: getSummoner(props.game),
        };
    }

    public convertGameDuration = (): string => {
        const { game } = this.props;

        const mm = Math.floor(game.gameDuration / 60);
        const ss = game.gameDuration % 60;

        return `${mm}m ${ss}s`;
    };

    public render() {
        const { game, classes } = this.props;
        const { player } = this.state;

        return (
            <div className={classes.container}>
                <div className={classes.mapAndModeContainer}>
                    <p className={classes.mapAndModeText}>{game.mapName}</p>
                    <p className={classes.mapAndModeText}>{game.queueName}</p>
                    <p className={classes.mapAndModeText}>{this.convertGameDuration()}</p>
                </div>
                <Avatar className={classes.championAvatar} src={`/champion/${trimName(player.championName)}.png`} />
                <div className={classes.summonerSpellsContainer}>
                    <Avatar
                        className={classes.summonerSpells}
                        variant="rounded"
                        src={`/summonerspells/${player.spell1}.png`}
                    />
                    <Avatar
                        className={classes.summonerSpells}
                        variant="rounded"
                        src={`/summonerspells/${player.spell2}.png`}
                    />
                </div>
                <div className={classes.kdaContainer}>
                    <ThemeProvider theme={typographyTheme}>
                        <Typography variant="h6">{`${player.kills} / ${player.deaths} / ${player.assists}`}</Typography>
                        <Typography variant="body1">{calculateKDA(player)}</Typography>
                    </ThemeProvider>
                </div>
                <TeamChart game={game} />
            </div>
        );
    }
}

const GameTitleBar = withStyles(gameTitleBarStyles)(GameTitleBarBase);

export { GameTitleBar };
