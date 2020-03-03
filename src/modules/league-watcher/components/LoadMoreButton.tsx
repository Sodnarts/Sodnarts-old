import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { IRootState } from 'src/common/state/reducers/IState';
import * as actions from 'src/modules/league-watcher/redux/actions';
import { ILeaguePaginationState } from 'src/modules/league-watcher/redux/reducers/IReducer';
import { IMatchHistoryState } from 'src/modules/league-watcher/redux/reducers/matchHistoryReducer';

interface IProps {
    leaguePagination: ILeaguePaginationState;
    matchHistory: IMatchHistoryState;
    loadMore: (summonerName: string, pagination: number) => void;
}

class LoadMoreButtonBase extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            pagination: 0,
        };
    }

    public UNSAFE_componentWillReceiveProps(props: IProps) {
        this.setState({
            pagination: props.leaguePagination,
        });
    }

    public handleOnClick = () => {
        this.props.loadMore(this.props.leaguePagination.summonerName, this.props.leaguePagination.position + 10);
    };

    public renderContent = () => {
        const { leaguePagination, matchHistory } = this.props;
        if (!!leaguePagination.summonerName && !!(matchHistory.length > 0)) {
            return (
                <Button
                    style={{ marginTop: '30px', marginBottom: '7.5%', border: '1px solid #666666', width: '30%' }}
                    onClick={this.handleOnClick}
                >
                    {getLanguageFile().league.loadMore}
                </Button>
            );
        } else {
            return null;
        }
    };
    public render() {
        return <>{this.renderContent()}</>;
    }
}

const mapStateToProps = ({ league: { leaguePagination, matchHistory } }: IRootState) => {
    return { leaguePagination, matchHistory };
};

const LoadMoreButton = connect(mapStateToProps, actions)(LoadMoreButtonBase);
export { LoadMoreButton };
