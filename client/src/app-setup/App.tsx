import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'src/app-setup/Header';
import { RouterComponent } from 'src/app-setup/Router';
import * as actions from 'src/common/state/actions/index';

/**
 *
 *
 * @interface IProps
 */
interface IProps {
    fetchUser: () => void;
}

/**
 *
 *
 * @class App
 * @extends {React.Component<IProps>}
 */
class AppBase extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

        if (!!this.props.fetchUser) {
            this.props.fetchUser();
        }
    }

    public render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <RouterComponent />
                </BrowserRouter>
            </div>
        );
    }
}

const App = connect(null, actions)(AppBase);

export { App };
