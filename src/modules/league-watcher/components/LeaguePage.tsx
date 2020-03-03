import { Typography } from '@material-ui/core';
import React from 'react';
import { LoadMoreButton } from 'src/modules/league-watcher/components/LoadMoreButton';
import { MatchHistoryDisplayer } from 'src/modules/league-watcher/components/match-history-displayer/MatchHistoryDisplayer';
import { SearchBar } from 'src/modules/league-watcher/components/search-bar/SearchBar';

/**
 * Refactor to functional component!
 *
 * @class LeaguePageBase
 * @extends {React.Component}
 */
class LeaguePageBase extends React.Component {
    public render() {
        return (
            <div style={{ marginTop: '30px' }}>
                <Typography variant="h4">League Watcher</Typography>
                <SearchBar />
                <MatchHistoryDisplayer />
                <LoadMoreButton />
            </div>
        );
    }
}

const LeaguePage = LeaguePageBase;

export { LeaguePage };
