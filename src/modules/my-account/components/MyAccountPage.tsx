import React from 'react';
import { NotImplemented } from 'src/common/error-pages/NotImplemented';
import { BillingHistory } from 'src/modules/my-account/components/billing-history/BillingHistory';
import { LeftDrawer } from 'src/modules/my-account/components/drawer/LeftDrawer';
import { Languages } from 'src/modules/my-account/components/languages/Languages';
import { Profile } from 'src/modules/my-account/components/profile/Profile';
import { Themes } from 'src/modules/my-account/components/themes/Themes';

interface IState {
    componentNumber: number;
}
class MyAccountBase extends React.Component<{}, IState> {
    constructor(props: any) {
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
        return (
            <div
                style={{
                    display: 'flex',
                    position: 'relative',
                    width: '96%',
                }}
            >
                <LeftDrawer updateRender={this.updateRender} />
                <div
                    style={{
                        display: 'block',
                        marginLeft: '4%',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}

export const MyAccount = MyAccountBase;
