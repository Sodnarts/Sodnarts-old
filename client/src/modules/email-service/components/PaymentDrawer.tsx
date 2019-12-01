import { AppBar, TextField, WithStyles, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import React from 'react';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { routes } from 'src/common/globals/routes/routes';
import { color } from 'src/common/utils/getColor';
import { styles } from 'src/modules/email-service/styles/PaymentDrawerStyles';

interface IState {
    error: string;
    username: string;
    right: boolean;
    password: string;
    validation: boolean;
}
type IPaymentDrawer = WithStyles<typeof styles>;

class PaymentDrawerBase extends React.Component<IPaymentDrawer, IState> {
    private lang = getLanguageFile();

    constructor(props: IPaymentDrawer) {
        super(props);

        this.state = {
            error: '',
            password: '',
            right: false,
            username: '',
            validation: false,
        };
    }

    public toggleDrawer = (side: any, open: any) => (event: any) => {
        this.setState({ right: open });
    };

    public handleUsernameOnChange = (event: any) => {
        this.setState({
            username: event.target.value,
        });
    };

    public handlePasswordOnChange = (event: any) => {
        this.setState({
            password: event.target.value,
        });
    };

    public handleValidation = () => {
        if (
            this.state.username === routes.emailService.drawer.username &&
            this.state.password === routes.emailService.drawer.password
        ) {
            this.setState({ validation: true, error: '' });
        } else {
            this.setState({
                error: this.lang.error.messages.wrongCredentials,
            });
        }
    };

    public renderContent = () => {
        if (this.state.validation === false) {
            return (
                <div>
                    <AppBar
                        elevation={1}
                        position="sticky"
                        style={{ top: '30px', padding: '30px', backgroundColor: 'white' }}
                    >
                        <div style={{ color: 'black', textAlign: 'center' }}>
                            <h6>{this.state.error}</h6>
                        </div>
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            id="standard-name"
                            label={this.lang.payments.labelName}
                            margin="normal"
                            onChange={this.handleUsernameOnChange}
                            required={true}
                            style={{ width: '100%' }}
                        />
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            id="standard-password"
                            label={this.lang.payments.labelPass}
                            margin="normal"
                            onChange={this.handlePasswordOnChange}
                            required={true}
                            style={{ width: '100%' }}
                            type="password"
                        />
                        <Button
                            style={{
                                backgroundColor: color().text,
                                border: `1px solid ${color().primary}`,
                                borderRadius: '50px',
                                color: color().primary,
                                marginLeft: '25%',
                                width: '50%',
                            }}
                            onClick={this.handleValidation}
                        >
                            {this.lang.payments.button}
                        </Button>
                    </AppBar>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="col m4">
                        <div
                            className="card lighten-5"
                            key={1}
                            style={{ border: '1px solid #2196f3', borderRadius: '10px' }}
                        >
                            <div className="card-content lighten-5 blue" style={{ borderRadius: '10px' }}>
                                <h5 style={{ margin: '0px', padding: '0px', textAlign: 'center' }}>
                                    {this.lang.payments.cardForm.creditCard}
                                </h5>
                                <Divider style={{ opacity: 0, marginTop: '10px' }} />
                                <TextField
                                    InputProps={{ readOnly: true, disableUnderline: true }}
                                    id="email"
                                    label={this.lang.payments.cardForm.email}
                                    margin="normal"
                                    style={{ width: '100%' }}
                                    value={this.lang.payments.cardFormValues.email}
                                />
                                <Divider style={{ opacity: 0 }} />
                                <TextField
                                    InputProps={{ readOnly: true, disableUnderline: true }}
                                    id="cardNumber"
                                    label={this.lang.payments.cardForm.cardNumber}
                                    margin="normal"
                                    style={{ width: '100%' }}
                                    value={this.lang.payments.cardFormValues.cardNumber}
                                />
                                <Divider style={{ opacity: 0 }} />
                                <TextField
                                    InputProps={{ readOnly: true, disableUnderline: true }}
                                    id="date"
                                    label={this.lang.payments.cardForm.expire}
                                    margin="normal"
                                    style={{ width: '100%' }}
                                    value={this.lang.payments.cardFormValues.expire}
                                />
                                <Divider style={{ opacity: 0 }} />
                                <TextField
                                    InputProps={{ readOnly: true, disableUnderline: true }}
                                    id="cvc"
                                    label={this.lang.payments.cardForm.cvc}
                                    margin="normal"
                                    style={{ width: '100%' }}
                                    value={this.lang.payments.cardFormValues.cvc}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    public render() {
        const { classes } = this.props;

        return (
            <div>
                <div className="right">
                    <Button onClick={this.toggleDrawer('right', true)} className={classes.button}>
                        <i style={{ color: color().text }} className="material-icons">
                            menu
                        </i>
                    </Button>
                </div>
                <Drawer
                    className={classes.container}
                    classes={{ paper: classes.paper }}
                    anchor="right"
                    open={this.state.right}
                >
                    <Button className={classes.drawerClose} onClick={this.toggleDrawer('right', false)}>
                        <i className="material-icons">arrow_back</i>
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
