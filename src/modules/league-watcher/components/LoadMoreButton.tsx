import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'src/common/state/reducers/IState';
import * as actions from 'src/modules/league-watcher/redux/actions';
import { ILeaguePaginationState } from 'src/modules/league-watcher/redux/reducers/IReducer';

interface IProps {
    leaguePagination: ILeaguePaginationState;
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
        if (!!this.props.leaguePagination.summonerName) {
            return (
                <Button
                    style={{ marginTop: '30px', marginBottom: '7.5%', border: '1px solid #666666', width: '30%' }}
                    onClick={this.handleOnClick}
                >
                    Load More
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

const mapStateToProps = ({ league: { leaguePagination } }: IRootState) => {
    return { leaguePagination };
};

const LoadMoreButton = connect(mapStateToProps, actions)(LoadMoreButtonBase);
export { LoadMoreButton };
