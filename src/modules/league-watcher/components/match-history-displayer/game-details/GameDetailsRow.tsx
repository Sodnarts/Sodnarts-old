import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import { calculateKDA } from 'src/modules/league-watcher/components/match-history-displayer/utils/calculateKDA';
import { trimName } from 'src/modules/league-watcher/components/match-history-displayer/utils/trimName';
import { IItem } from 'src/modules/league-watcher/interface/ILeague';
import { IParticipant } from 'src/modules/league-watcher/redux/actions/IActions';

interface IProps {
    participant: IParticipant;
    didWin: boolean;
    duration: number;
}

class GameDetailsRow extends React.Component<IProps> {
    public getIconAndName = () => {
        const { participant } = this.props;
        return (
            <div style={{ width: '25%', display: 'flex', flexDirection: 'row' }}>
                <Avatar src={`/champion/${trimName(participant.championName)}.png`} />
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '4px' }}>
                    {!!participant.spell1 ? (
                        <Avatar
                            style={{ height: '16px', width: '16px', margin: 'auto' }}
                            variant="rounded"
                            src={`/summonerspells/${participant.spell1}.png`}
                        />
                    ) : null}
                    {!!participant.spell1 ? (
                        <Avatar
                            style={{ height: '16px', width: '16px', margin: 'auto' }}
                            variant="rounded"
                            src={`/summonerspells/${participant.spell2}.png`}
                        />
                    ) : null}
                </div>
                <Typography style={{ margin: 'auto 5px', overflow: 'hidden', whiteSpace: 'nowrap' }} variant="body1">
                    {participant.summonerName}
                </Typography>
            </div>
        );
    };

    public getKDA = () => {
        const { participant } = this.props;

        return (
            <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
                <Typography style={{ margin: '0 auto', fontSize: '12px' }} variant="body1">
                    {calculateKDA(participant)}
                </Typography>
                <Typography style={{ margin: '0 auto', fontSize: '12px' }} variant="body2">
                    {`${participant.kills}/${participant.deaths}/${participant.assists}`}
                </Typography>
            </div>
        );
    };

    public getCS = () => {
        const { participant, duration } = this.props;

        return (
            <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
                <Typography style={{ margin: '0 auto', fontSize: '12px' }} variant="body1">
                    {participant.minions}
                </Typography>
                <Typography style={{ margin: '0 auto', fontSize: '12px' }} variant="body2">
                    {`${parseFloat((participant.minions / (duration / 60)).toString()).toFixed(1)}/m`}
                </Typography>
            </div>
        );
    };

    public getItems = () => {
        const { participant } = this.props;
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
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {items.map(({ id, item }: IItem) => {
                    return (
                        <Avatar
                            variant="rounded"
                            key={participant.summonerName + `_${id}_` + item}
                            style={{ height: '24px', width: '24px', margin: 'auto 4px' }}
                            src={`/items/${!!item ? item : '0000'}.png`}
                        />
                    );
                })}
            </div>
        );
    };

    public render() {
        const { didWin } = this.props;

        return (
            <div
                style={{
                    backgroundColor: !!didWin ? '#26c9ff50' : '#ff363630',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '4px 16px',
                    width: '100%',
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

export { GameDetailsRow };
