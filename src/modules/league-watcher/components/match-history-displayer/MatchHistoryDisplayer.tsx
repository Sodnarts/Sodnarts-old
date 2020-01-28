import { Paper, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'src/common/state/reducers/IState';
import { ExpansionPanel } from 'src/modules/league-watcher/components/match-history-displayer/expansion-panels/ExpansionPanel';
import { ExpansionPanelDetails } from 'src/modules/league-watcher/components/match-history-displayer/expansion-panels/ExpansionPanelDetails';
import { ExpansionPanelSummary } from 'src/modules/league-watcher/components/match-history-displayer/expansion-panels/ExpansionPanelSummary';
import { GameDetails } from 'src/modules/league-watcher/components/match-history-displayer/game-details/GameDetails';
// tslint:disable-next-line: max-line-length
import { GameTitleBar } from 'src/modules/league-watcher/components/match-history-displayer/game-title-bar/GameTitleBar';
import { matchHistoryDisplayerStyles } from 'src/modules/league-watcher/components/match-history-displayer/MatchHistoryDisplayerStyles';
import { IMatch, IParticipant } from 'src/modules/league-watcher/redux/actions/IActions';
import { IMatchHistoryState } from 'src/modules/league-watcher/redux/reducers/matchHistoryReducer';

interface IProps {
    matchHistory: IMatchHistoryState;
}

type IMatchHistoryDisplayerProps = IProps & WithStyles<typeof matchHistoryDisplayerStyles>;

interface IState {
    expanded: string;
    matchHistory: IMatchHistoryState;
}

class MatchHistoryDisplayerBase extends React.Component<IMatchHistoryDisplayerProps, IState> {
    constructor(props: IMatchHistoryDisplayerProps) {
        super(props);

        this.state = {
            expanded: 'panel',
            matchHistory: !!props.matchHistory ? props.matchHistory : [],
        };
    }

    public UNSAFE_componentWillReceiveProps(props: IProps) {
        this.setState({
            matchHistory: props.matchHistory,
        });
    }

    public getWinFromSummoner = (game: IMatch): boolean => {
        let winOrLoss = false;
        game.participants.forEach((participant: IParticipant): void => {
            if (
                decodeURI(game.selfName)
                    .toLowerCase()
                    .replace(' ', '') === participant.summonerName.toLowerCase()
            ) {
                if (game.winningTeam === participant.teamId) {
                    winOrLoss = true;
                }
            }
        });
        return winOrLoss;
    };

    public handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
        this.setState({
            expanded: !!(this.state.expanded === panel) ? 'panel' : panel,
        });
    };

    public renderContent = () => {
        const { matchHistory } = this.state;
        if (!!matchHistory) {
            return matchHistory.map((game: IMatch) => {
                return (
                    <ExpansionPanel
                        key={game.gameCreation}
                        expanded={this.state.expanded === `panel${game.gameCreation}`}
                        onChange={this.handleChange(`panel${game.gameCreation}`)}
                    >
                        <ExpansionPanelSummary
                            style={{
                                backgroundColor: !!this.getWinFromSummoner(game) ? '#26c9ff' : '#ff3636',
                                opacity: 0.8,
                            }}
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                        >
                            <GameTitleBar game={game} />
                        </ExpansionPanelSummary>
                        {!!(this.state.expanded === `panel${game.gameCreation}`) ? (
                            <ExpansionPanelDetails
                                style={{
                                    opacity: 0.8,
                                    padding: '0px',
                                }}
                            >
                                <GameDetails game={game} />
                            </ExpansionPanelDetails>
                        ) : null}
                    </ExpansionPanel>
                );
            });
        }
    };

    public render() {
        const { classes } = this.props;
        return (
            <Paper elevation={4} className={classes.container}>
                {this.renderContent()}
            </Paper>
        );
    }
}

const mapStateToProps = ({ league: { matchHistory } }: IRootState) => {
    return { matchHistory };
};

const MatchHistoryDisplayer = connect(mapStateToProps)(
    withStyles(matchHistoryDisplayerStyles)(MatchHistoryDisplayerBase),
);
export { MatchHistoryDisplayer };
