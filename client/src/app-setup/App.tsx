import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ModulesMenu } from 'src/app-setup/components/modules-menu/ModulesMenu';
import { Header } from 'src/app-setup/Header';
import { RouterComponent } from 'src/app-setup/Router';
import { Alert } from 'src/common/components/alert/Alert';
import * as actions from 'src/common/state/actions/index';
import { AlertType } from 'src/common/state/actions/types';

/**
 *
 *
 * @interface IProps
 */
interface IProps {
    alert?: any;
    toggleMenu: boolean;
    fetchUser: () => void;
    dismissAlert: () => void;
    toggleModulesMenu: () => void;
}

interface IState {
    alertOpen: boolean;
    menuOpen: boolean;
    message: string;
    alertType: AlertType;
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
            alertOpen: false,
            alertType: AlertType.error,
            menuOpen: false,
            message: '',
        };
    }

    public componentWillReceiveProps(props: IProps) {
        this.setState({
            alertOpen: props.alert.isOpen,
            alertType: props.alert.type,
            menuOpen: props.toggleMenu,
            message: props.alert.message,
        });
    }

    public handleClose = () => {
        this.props.dismissAlert();
    };

    public render() {
        const { alertOpen, menuOpen, message, alertType } = this.state;

        return (
            <div>
                <BrowserRouter>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Header />
                        <RouterComponent />
                    </div>
                    <Alert isOpen={alertOpen} message={message} handleOnClose={this.handleClose} type={alertType} />
                    <ModulesMenu isOpen={menuOpen} />
                </BrowserRouter>
            </div>
        );
    }
}

function mapStateToProps({ alert, toggleMenu }: any) {
    return { alert, toggleMenu };
}

const App = connect(mapStateToProps, actions)(AppBase);

export { App };
