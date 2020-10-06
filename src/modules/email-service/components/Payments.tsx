import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import * as actions from 'src/common/state/actions';
import { color } from 'src/common/utils/getColor';

/**
 *
 * @interface IProps
 */
interface IProps {
    handleToken: (token: Token) => void;
}

interface IState {
    width: number;
}

/**
 *
 * @class Payments
 * @extends {React.Component<IProps>}
 */
class PaymentsBase extends React.Component<IProps, IState> {
    private lang = getLanguageFile();

    constructor(props: IProps) {
        super(props);
        this.state = {
            width: window.innerWidth,
        };
        this.getButton = this.getButton.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    public componentWillReceiveProps(props: IProps) {
        window.addEventListener('resize', this.handleResize);
    }

    public componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    public handleResize() {
        this.setState({
            width: window.innerWidth,
        });
    }

    public getButton() {
        const { width } = this.state;
        if (width >= 640) {
            return (
                <Button
                    style={{
                        backgroundColor: color().text,
                        borderRadius: '50px',
                        color: color().secondary,
                        font: 'bold',
                        opacity: 1,
                    }}
                >
                    {this.lang.payments.addCredits}
                </Button>
            );
        } else {
            return (
                <Button
                    style={{
                        backgroundColor: color().text,
                        borderRadius: '20px',
                        color: color().secondary,
                        margin: '0',
                        padding: '0',
                    }}
                    aria-label="add"
                >
                    ADD
                </Button>
            );
        }
    }

    public retrieveStripeKey() {
        if (!!process.env.REACT_APP_STRIPE_KEY) {
            return process.env.REACT_APP_STRIPE_KEY;
        }
        return 'Missing key';
    }

    public handleSubmit = (token: Token) => {
        this.props.handleToken(token);
    };
    public render() {
        return (
            <div style={{ marginLeft: '16px', marginRight: '24px', marginTop: '8px' }}>
                <StripeCheckout
                    name={this.lang.payments.name}
                    description={this.lang.payments.description}
                    amount={500}
                    token={this.handleSubmit}
                    stripeKey={this.retrieveStripeKey()}
                >
                    {this.getButton()}
                </StripeCheckout>
            </div>
        );
    }
}

const Payments = connect(null, actions)(PaymentsBase);

export { Payments };
