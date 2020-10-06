import { AppBar, Paper, Slide, Tab, Tabs } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { routes } from 'src/common/globals/routes/routes';
import * as actions from 'src/common/state/actions';
import { IAuthState, IRootState } from 'src/common/state/reducers/IState';
import { color } from 'src/common/utils/getColor';

interface IProps {
    history: any;
    isOpen: boolean;
    auth: IAuthState;
    language: string;
    toggleModulesMenu: () => void;
}

interface IState {
    value: number;
    tabs: string[];
    urls: string[];
}

class ModulesMenuBase extends React.Component<IProps, IState> {
    public lang = getLanguageFile();

    constructor(props: IProps) {
        super(props);

        this.state = {
            tabs: [],
            urls: [],
            value: 0,
        };
    }

    public componentWillReceiveProps(props: IProps, nextProps: IProps) {
        if (props.language !== nextProps.language) {
            this.updateLanguage();
        }

        this.getTabsList();
    }

    public componentDidMount() {
        this.getTabsList();
    }

    public hasRoleOf = (role: string) => {
        const { auth } = this.props;

        if (auth) {
            return !!auth.roles.includes(role);
        }
        return false;
    };

    public matchActiveTabToUrl = () => {
        const { urls } = this.state;
        const { history } = this.props;

        if (history.location.pathname.toString().includes(urls[1])) {
            this.setState({ value: 1 });
        } else if (history.location.pathname.includes(urls[2])) {
            this.setState({ value: 2 });
        } else if (history.location.pathname.includes(urls[3])) {
            this.setState({ value: 3 });
        } else {
            this.setState({ value: 0 });
        }
    };

    public updateLanguage = () => {
        this.lang = getLanguageFile();
    };

    public handleChange = (event: any, value: number) => {
        const { urls } = this.state;

        this.setState(
            {
                value,
            },
            () => {
                this.props.toggleModulesMenu();
                this.props.history.push(urls[value]);
            },
        );
    };

    public getTabsList = () => {
        const tabs: string[] = [];
        const urls: string[] = [];

        if (this.hasRoleOf('Admin') || this.hasRoleOf('Owner')) {
            tabs.push(this.lang.modules.home);
            urls.push(routes.home.home);
            tabs.push(this.lang.modules.emailService);
            urls.push(routes.emailService.home);
            tabs.push(this.lang.modules.webShop);
            urls.push(routes.webShop.home);
            tabs.push(this.lang.modules.league);
            urls.push(routes.league.home);
        } else {
            if (this.hasRoleOf('Home')) {
                tabs.push(this.lang.modules.home);
                urls.push(routes.home.home);
            }
            if (this.hasRoleOf('Email-Service')) {
                tabs.push(this.lang.modules.emailService);
                urls.push(routes.emailService.home);
            }
            if (this.hasRoleOf('Web-Shop')) {
                tabs.push(this.lang.modules.webShop);
                urls.push(routes.webShop.home);
            }
            if (this.hasRoleOf('League-Watcher')) {
                tabs.push(this.lang.modules.league);
                urls.push(routes.league.home);
            }
        }

        this.setState(
            {
                tabs,
                urls,
            },
            () => this.matchActiveTabToUrl(),
        );
    };

    public renderContent = () => {
        const { value, tabs } = this.state;

        return (
            <Slide in={this.props.isOpen} direction="down" timeout={{ enter: 500, exit: 500 }}>
                <Paper
                    id="menu-container"
                    elevation={0}
                    style={{
                        backgroundColor: color().primary,
                        borderRadius: '0px',
                        borderTop: '0px',
                        position: 'fixed',
                        top: '60px',
                        width: '100%',
                        zIndex: 1010,
                    }}
                >
                    <AppBar position="static" style={{ backgroundColor: color().primary }}>
                        <Tabs value={value} onChange={this.handleChange} aria-label="simple tabs example">
                            {tabs.map((tab: string) => {
                                return <Tab key={tab} label={tab} style={{ color: color().text }} />;
                            })}
                        </Tabs>
                    </AppBar>
                </Paper>
            </Slide>
        );
    };

    public render() {
        return <div>{this.renderContent()}</div>;
    }
}

function mapStateToProps({ auth, account: { language } }: IRootState) {
    return { auth, language };
}

const ModulesMenu = connect(mapStateToProps, actions)(withRouter<any, typeof ModulesMenuBase>(ModulesMenuBase));
export { ModulesMenu };
