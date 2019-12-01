import React from 'react';
import { PageNotFound } from 'src/common/error-pages/PageNotFound';
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
                return <BillingHistory />;
            case 4:
                return <PageNotFound />;
            case 5:
                return <PageNotFound />;
            case 6:
                return <PageNotFound />;
            case 7:
                return <PageNotFound />;
            default:
                return <PageNotFound />;
        }
    };
    public render() {
        return (
            <div
                style={{
                    display: 'flex',
                    position: 'relative',
                    width: '100%',
                }}
            >
                <LeftDrawer updateRender={this.updateRender} />
                <div
                    style={{
                        display: 'block',
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
