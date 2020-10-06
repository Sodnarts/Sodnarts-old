import { withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import { NotImplemented } from 'src/common/error-pages/NotImplemented';
import { LeftDrawer } from 'src/modules/my-account/components/drawer/LeftDrawer';
import { Languages } from 'src/modules/my-account/components/languages/Languages';
import { myAccountPageStyles } from 'src/modules/my-account/components/MyAccountPageStyles';
import { Profile } from 'src/modules/my-account/components/profile/Profile';
import { Themes } from 'src/modules/my-account/components/themes/Themes';

interface IState {
    componentNumber: number;
}

type IMyAccount = WithStyles<typeof myAccountPageStyles>;

class MyAccountBase extends React.Component<IMyAccount, IState> {
    constructor(props: IMyAccount) {
        super(props);

        this.state = {
            componentNumber: 0,
        };
    }

    public updateRender = (componentNumber: number) => {
        this.setState({
            componentNumber,
        });
    };

    public renderContent = () => {
        switch (this.state.componentNumber) {
            case 0:
                return <Profile />;
            case 1:
                return <Themes />;
            case 2:
                return <Languages />;
            case 3:
                return <NotImplemented />;
            case 4:
                return <NotImplemented />;
            default:
                return <NotImplemented />;
        }
    };
    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <LeftDrawer updateRender={this.updateRender} />
                <div className={classes.componentContainer}>{this.renderContent()}</div>
            </div>
        );
    }
}

export const MyAccount = withStyles(myAccountPageStyles)(MyAccountBase);
