import { WithStyles, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import React, { SyntheticEvent } from 'react';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { color } from 'src/common/utils/getColor';
import { PaymentDrawerInformation } from 'src/modules/email-service/components/payment-drawer/PaymentDrawerInformation';
import { PaymentDrawerLogin } from 'src/modules/email-service/components/payment-drawer/PaymentDrawerLogin';
import { styles } from 'src/modules/email-service/styles/PaymentDrawerStyles';

interface IState {
    right: boolean;
    validation: boolean;
}
type IPaymentDrawer = WithStyles<typeof styles>;

class PaymentDrawerBase extends React.Component<IPaymentDrawer, IState> {
    private lang = getLanguageFile();

    constructor(props: IPaymentDrawer) {
        super(props);

        this.state = {
            right: false,
            validation: false,
        };
    }

    public toggleDrawer = (side: string, open: boolean) => (event: SyntheticEvent) => {
        this.setState({ right: open });
    };

    public setValidation = (validation: boolean) => {
        this.setState({
            validation,
        });
    };

    public renderContent = () => {
        if (this.state.validation === false) {
            return <PaymentDrawerLogin setValidation={this.setValidation} />;
        } else {
            return <PaymentDrawerInformation />;
        }
    };

    public render() {
        const { classes } = this.props;

        return (
            <div>
                <div className="right">
                    <Button
                        onClick={this.toggleDrawer('right', true)}
                        className={classes.button}
                        style={{ color: color().text }}
                    >
                        <MenuOpenIcon fontSize="large" />
                    </Button>
                </div>
                <Drawer
                    className={classes.container}
                    classes={{ paper: classes.paper }}
                    anchor="right"
                    open={this.state.right}
                >
                    <Button className={classes.drawerClose} onClick={this.toggleDrawer('right', false)}>
                        <KeyboardBackspaceIcon fontSize="large" />
                    </Button>
                    <div style={{ textAlign: 'center', paddingBottom: '0px', marginBottom: '0px' }}>
                        <h4>{this.lang.payments.title}</h4>
                    </div>
                    <div className={classes.list}>
                        <List>
                            <div
                                style={{
                                    marginLeft: '20px',
                                    marginRight: '20px',
                                    padding: '10px',
                                }}
                            >
                                {this.renderContent()}
                            </div>
                        </List>
                        <Divider />
                    </div>
                </Drawer>
            </div>
        );
    }
}

export const PaymentDrawer = withStyles(styles)(PaymentDrawerBase);
