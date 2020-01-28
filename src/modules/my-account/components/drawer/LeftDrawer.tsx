import { Divider, Drawer, List, ListItem, ListItemText, withStyles } from '@material-ui/core';
import { WithStyles } from '@material-ui/styles';
import React from 'react';
import { connect } from 'react-redux';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { IRootState } from 'src/common/state/reducers/IState';
import { color } from 'src/common/utils/getColor';
import { IProps } from 'src/modules/my-account/interface/IMyAccount';
import { styles } from 'src/modules/my-account/styles/myAccountStyles';

interface IState {
    drawerNumber: number;
}
type ILeftDrawer = IProps & WithStyles<typeof styles>;

class LeftDrawerBase extends React.Component<ILeftDrawer, IState> {
    constructor(props: ILeftDrawer) {
        super(props);

        this.state = {
            drawerNumber: 0,
        };
    }

    public getBackgroundColor(index: number) {
        if (index === this.state.drawerNumber) {
            return color().primary;
        } else {
            return 'transparent';
        }
    }

    public getColor(index: number) {
        if (index === this.state.drawerNumber) {
            return color().text;
        } else {
            return color().secondaryText;
        }
    }

    public handleOnChange = (drawerNumber: number) => {
        this.setState({
            drawerNumber,
        });
        this.props.updateRender(drawerNumber);
    };

    public renderDrawer = () => {
        return withStyles(() => ({
            paper: {
                backgroundColor: color().background,
            },
        }))(Drawer);
    };

    public render() {
        const lang = getLanguageFile();
        const { classes } = this.props;

        const StyledDrawer = this.renderDrawer();
        return (
            <div className={classes.root}>
                <StyledDrawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <List style={{ position: 'fixed', margin: '0px', padding: '0px' }} className={classes.list}>
                        {lang.myaccount.drawer.list.map((text: string, index: number) => (
                            <div style={{ margin: '0px', padding: '0px' }} key={index}>
                                <ListItem
                                    style={{
                                        backgroundColor: this.getBackgroundColor(index),
                                        color: this.getColor(index),
                                    }}
                                    selected={this.state.drawerNumber === index}
                                    button={true}
                                    key={index}
                                    // tslint:disable-next-line: jsx-no-lambda
                                    onClick={() => this.handleOnChange(index)}
                                >
                                    <ListItemText primary={text} />
                                </ListItem>
                                <Divider style={{ height: '1.2px', opacity: 0.3, backgroundColor: color().divider }} />
                            </div>
                        ))}
                    </List>
                </StyledDrawer>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

export const LeftDrawer = connect(mapStateToProps)(withStyles(styles)(LeftDrawerBase));
