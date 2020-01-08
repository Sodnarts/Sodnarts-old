import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'src/app-setup/Header';
import { RouterComponent } from 'src/app-setup/Router';
import { Alert } from 'src/common/components/alert/Alert';
import * as actions from 'src/common/state/actions/index';

/**
 *
 *
 * @interface IProps
 */
interface IProps {
    alert?: any;
    fetchUser: () => void;
    dismissAlert: () => void;
}

interface IState {
    isOpen: boolean;
    message: string;
}

/**
 *
 *
 * @class App
 * @extends {React.Component<IProps>}
 */
class AppBase extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        if (!!this.props.fetchUser) {
            this.props.fetchUser();
        }

        this.state = {
            isOpen: false,
            message: '',
        };
    }

    public componentWillReceiveProps(props: IProps) {
        this.setState({
            isOpen: props.alert.isOpen,
            message: props.alert.message,
        });
    }

    public handleClose = () => {
        this.props.dismissAlert();
    };

    public render() {
        const { isOpen, message } = this.state;

        return (
            <div>
                <BrowserRouter>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Header />
                        <RouterComponent />
                    </div>
                    <Alert isOpen={isOpen} message={message} handleOnClose={this.handleClose} />
                </BrowserRouter>
            </div>
        );
    }
}

function mapStateToProps({ alert }: any) {
    return { alert };
}

const App = connect(mapStateToProps, actions)(AppBase);

export { App };
