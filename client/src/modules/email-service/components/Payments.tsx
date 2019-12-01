import { Fab } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import * as actions from 'src/common/state/actions';
import { color } from 'src/common/utils/getColor';

/**
 *
 * @interface IProps
 */
interface IProps {
    handleToken: (token: any) => void;
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
    public lang = getLanguageFile();

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
        if (width >= 600) {
            return (
                <button
                    className="btn"
                    style={{
                        backgroundColor: color().text,
                        borderRadius: '50px',
                        color: color().primary,
                        font: 'bold',
                        opacity: 1,
                    }}
                >
                    {this.lang.payments.addCredits}
                </button>
            );
        } else {
            return (
                <Fab
                    size="small"
                    style={{ backgroundColor: color().text, color: color().primary, margin: '0', padding: '0' }}
                    aria-label="add"
                >
                    <Icon style={{ margin: '0px', padding: '0px' }}>add</Icon>
                </Fab>
            );
        }
    }

    public retrieveStripeKey() {
        if (!!process.env.REACT_APP_STRIPE_KEY) {
            return process.env.REACT_APP_STRIPE_KEY;
        }
        return 'Missing key';
    }

    public handleSubmit = (token: any) => {
        this.props.handleToken(token);
    };
    public render() {
        return (
            <StripeCheckout
                name={this.lang.payments.name}
                description={this.lang.payments.description}
                amount={500}
                token={this.handleSubmit}
                stripeKey={this.retrieveStripeKey()}
            >
                {this.getButton()}
            </StripeCheckout>
        );
    }
}

const Payments = connect(null, actions)(PaymentsBase);

export { Payments };
