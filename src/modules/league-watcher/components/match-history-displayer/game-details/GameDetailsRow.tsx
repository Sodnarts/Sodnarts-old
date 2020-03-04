import { Avatar, Typography, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import { gameDetailsRowStyles } from 'src/modules/league-watcher/components/match-history-displayer/game-details/GameDetailsRowStyles';
import { calculateKDA } from 'src/modules/league-watcher/components/match-history-displayer/utils/calculateKDA';
import { trimName } from 'src/modules/league-watcher/components/match-history-displayer/utils/trimName';
import { IItem } from 'src/modules/league-watcher/interface/ILeague';
import { IParticipant } from 'src/modules/league-watcher/redux/actions/IActions';

interface IProps {
    participant: IParticipant;
    didWin: boolean;
    duration: number;
}

type IGameDetailsRow = IProps & WithStyles<typeof gameDetailsRowStyles>;

class GameDetailsRowBase extends React.Component<IGameDetailsRow> {
    public getIconAndName = () => {
        const { participant, classes } = this.props;
        return (
            <div className={classes.iconAndNameContainer}>
                <Avatar
                    className={classes.championAvatar}
                    src={`/champion/${trimName(participant.championName)}.png`}
                />
                <div className={classes.summonerSpellsContainer}>
                    {!!participant.spell1 ? (
                        <Avatar
                            className={classes.summonerSpells}
                            variant="rounded"
                            src={`/summonerspells/${participant.spell1}.png`}
                        />
                    ) : null}
                    {!!participant.spell1 ? (
                        <Avatar
                            className={classes.summonerSpells}
                            variant="rounded"
                            src={`/summonerspells/${participant.spell2}.png`}
                        />
                    ) : null}
                </div>
                <Typography className={classes.summonerNameText} variant="body1">
                    {participant.summonerName}
                </Typography>
            </div>
        );
    };

    public getKDA = () => {
        const { participant, classes } = this.props;

        return (
            <div className={classes.kdaContainer}>
                <Typography className={classes.kdaText} variant="body1">
                    {calculateKDA(participant)}
                </Typography>
                <Typography className={classes.kdaText} variant="body2">
                    {`${participant.kills}/${participant.deaths}/${participant.assists}`}
                </Typography>
            </div>
        );
    };

    public getCS = () => {
        const { participant, duration, classes } = this.props;

        return (
            <div className={classes.csContainer}>
                <Typography className={classes.csText} variant="body1">
                    {participant.minions}
                </Typography>
                <Typography className={classes.csText} variant="body2">
                    {`${parseFloat((participant.minions / (duration / 60)).toString()).toFixed(1)}/m`}
                </Typography>
            </div>
        );
    };

    public getItems = () => {
        const { participant, classes } = this.props;
        const items: IItem[] = [
            { id: '0', item: participant.item0 },
            { id: '1', item: participant.item1 },
            { id: '2', item: participant.item2 },
            { id: '3', item: participant.item3 },
            { id: '4', item: participant.item4 },
            { id: '5', item: participant.item5 },
            { id: '6', item: participant.item6 },
        ];

        return (
            <div className={classes.itemsContainer}>
                {items.map(({ id, item }: IItem) => {
                    return (
                        <Avatar
                            variant="rounded"
                            key={participant.summonerName + `_${id}_` + item}
                            className={classes.itemsAvatar}
                            src={`/items/${!!item ? item : '0000'}.png`}
                        />
                    );
                })}
            </div>
        );
    };

    public render() {
        const { didWin, classes } = this.props;

        return (
            <div
                className={classes.container}
                style={{
                    backgroundColor: !!didWin ? '#26c9ff50' : '#ff363630',
                }}
            >
                {this.getIconAndName()}
                {this.getKDA()}
                {this.getCS()}
                {this.getItems()}
            </div>
        );
    }
}

const GameDetailsRow = withStyles(gameDetailsRowStyles)(GameDetailsRowBase);

export { GameDetailsRow };
