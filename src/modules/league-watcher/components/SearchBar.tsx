import { createStyles, InputBase, makeStyles, Theme } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'src/modules/league-watcher/redux/actions';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            paddingBottom: '5px',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '5px',
            width: '90%',
        },
        search: {
            border: '1px solid black',
            borderRadius: '50px',
            marginTop: '25px',
            position: 'relative',
            transform: 'translateX(10%)',
            width: '80%',
        },
        searchIcon: {
            alignItems: 'center',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            pointerEvents: 'none',
            position: 'absolute',
            width: theme.spacing(7),
        },
    }),
);

interface IProps {
    leaguePagination: any;
    fetchMatchHistory: (summonerName: string, pagination: number) => void;
}

const SearchBarBase = (props: IProps) => {
    const classes = useStyles();

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            props.fetchMatchHistory(encodeURI(event.target.value), 0);
        }
    };
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                className={classes.input}
                placeholder="Summoner Name.."
                defaultValue={
                    !!props.leaguePagination.summonerName ? decodeURI(props.leaguePagination.summonerName) : ''
                }
                inputProps={{ 'aria-label': 'search' }}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
};

const mapStateToProps = ({ league }: any) => {
    return { leaguePagination: league.leaguePagination };
};

const SearchBar = connect(mapStateToProps, actions)(SearchBarBase);
export { SearchBar };
