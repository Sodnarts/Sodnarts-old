import { Button, createStyles, InputBase, Theme, withStyles, WithStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import React from 'react';
import { connect } from 'react-redux';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { IAuthState, IRootState } from 'src/common/state/reducers/IState';
import { styles } from 'src/modules/league-watcher/components/search-bar/SearchBarStyles';
import * as actions from 'src/modules/league-watcher/redux/actions';
import { ILeaguePaginationState } from 'src/modules/league-watcher/redux/reducers/IReducer';

interface IProps {
    auth: IAuthState;
    leaguePagination: ILeaguePaginationState;
    fetchMatchHistory: (summonerName: string, pagination: number) => void;
    updateFavorites: (summonerName: string, type: string) => void;
}

interface IState {
    favorites: string[];
    isFavorite: boolean;
    summonerName: string;
}

type ISearchBar = IProps & WithStyles<typeof styles>;

class SearchBarBase extends React.Component<ISearchBar, IState> {
    constructor(props: ISearchBar) {
        super(props);

        this.state = {
            favorites: !!this.props.auth ? this.props.auth.favoriteSN : [],
            isFavorite: false,
            summonerName: !!this.props.leaguePagination.summonerName
                ? decodeURI(this.props.leaguePagination.summonerName)
                : '',
        };
    }

    public componentDidMount() {
        this.setState({
            isFavorite: !!this.findSummonerNameInArray(this.props.leaguePagination.summonerName) ? true : false,
        });
    }

    public componentWillReceiveProps(props: IProps) {
        if (props.auth) {
            this.setState(
                {
                    favorites: props.auth.favoriteSN,
                },
                () => {
                    this.setState({
                        isFavorite: !!this.findSummonerNameInArray(props.leaguePagination.summonerName) ? true : false,
                    });
                },
            );
        }
    }

    public trimName = (sn: string) => {
        const tmpName = decodeURI(sn)
            .toLowerCase()
            .replace(' ', '');

        return tmpName;
    };

    public findSummonerNameInArray = (sn: string) => {
        const { favorites } = this.state;
        let exists = false;
        favorites.forEach((fav: string) => {
            if (this.trimName(fav) === this.trimName(sn)) {
                exists = true;
            }
        });

        return exists;
    };

    public handleAdd = () => {
        const { summonerName } = this.state;
        if (summonerName !== '') {
            this.props.updateFavorites(summonerName, 'ADD');
        }
    };

    public handleRemove = () => {
        const { summonerName } = this.state;
        this.props.updateFavorites(summonerName, 'REMOVE');
    };

    public handleChange = (event: any) => {
        this.setState({
            isFavorite: !!this.findSummonerNameInArray(event.target.value) ? true : false,
            summonerName: event.target.value,
        });
    };

    public handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            this.props.fetchMatchHistory(encodeURI(event.target.value), 0);
        }
    };

    public handleClick = (summonerName: string) => {
        this.props.fetchMatchHistory(encodeURI(summonerName), 0);
        this.setState({
            summonerName,
        });
    };

    public renderFavorites = () => {
        const { classes } = this.props;

        return (
            <div className={classes.favoritesList}>
                {!!this.props.auth
                    ? this.props.auth.favoriteSN.map((fav: string) => {
                          return (
                              // tslint:disable-next-line: jsx-no-lambda
                              <Button className={classes.button} onClick={() => this.handleClick(fav)} key={fav}>
                                  {fav}
                              </Button>
                          );
                      })
                    : null}
            </div>
        );
    };

    public render() {
        const { classes } = this.props;
        const { summonerName, isFavorite } = this.state;
        return (
            <>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        className={classes.input}
                        placeholder={getLanguageFile().league.summonerNamePlaceholder}
                        value={summonerName}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                    <div className={classes.favoriteIcon}>
                        {!!isFavorite ? (
                            <StarIcon fontSize={'default'} color={'primary'} onClick={this.handleRemove} />
                        ) : (
                            <StarBorderIcon fontSize={'default'} color={'primary'} onClick={this.handleAdd} />
                        )}
                    </div>
                </div>
                {this.renderFavorites()}
            </>
        );
    }
}

const mapStateToProps = ({ auth, league: { leaguePagination } }: IRootState) => {
    return { auth, leaguePagination };
};

const SearchBar = connect(mapStateToProps, actions)(withStyles(styles)(SearchBarBase));
export { SearchBar };
