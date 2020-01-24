import { AppBar, Box, Paper, Slide, Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { routes } from 'src/common/globals/routes/routes';
import * as actions from 'src/common/state/actions';
import { color } from 'src/common/utils/getColor';

interface IProps {
    history: any;
    isOpen: boolean;
    language: any;
    toggleModulesMenu: () => void;
}

interface IState {
    value: number;
}

interface ITabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: ITabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

class ModulesMenuBase extends React.Component<IProps, IState> {
    public lang = getLanguageFile();

    constructor(props: any) {
        super(props);

        this.state = {
            value: 0,
        };
    }

    public componentWillReceiveProps(props: IProps, nextProps: IProps) {
        if (props.language !== nextProps.language) {
            this.updateLanguage();
        }

        this.matchActiveTabToUrl();
    }

    public componentDidMount() {
        this.matchActiveTabToUrl();
    }

    public matchActiveTabToUrl = () => {
        if (this.props.history.location.pathname.toString().includes(routes.emailService.home)) {
            this.setState({ value: 1 });
        } else if (this.props.history.location.pathname.includes(routes.webShop.home)) {
            this.setState({ value: 2 });
        } else if (this.props.history.location.pathname.includes(routes.league.home)) {
            this.setState({ value: 3 });
        } else {
            this.setState({ value: 0 });
        }
    };

    public updateLanguage = () => {
        this.lang = getLanguageFile();
    };

    public handleChange = (event: any, value: number) => {
        this.setState(
            {
                value,
            },
            () => {
                this.props.toggleModulesMenu();
                switch (value) {
                    case 0:
                        this.props.history.push(routes.home.home);
                        return;
                    case 1:
                        this.props.history.push(routes.emailService.home);
                        return;
                    case 2:
                        this.props.history.push(routes.webShop.home);
                        return;
                    case 3:
                        this.props.history.push(routes.league.home);
                        return;
                }
            },
        );
    };

    public renderContent = () => {
        const { value } = this.state;

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
                            <Tab label={this.lang.modules.home} style={{ color: color().text }} />
                            <Tab label={this.lang.modules.emailService} style={{ color: color().text }} />
                            <Tab label={this.lang.modules.webShop} style={{ color: color().text }} />
                            <Tab label={this.lang.modules.league} style={{ color: color().text }} />
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

function mapStateToProps({ language }: any) {
    return { language };
}

const ModulesMenu = connect(mapStateToProps, actions)(withRouter<any, typeof ModulesMenuBase>(ModulesMenuBase));
export { ModulesMenu };
