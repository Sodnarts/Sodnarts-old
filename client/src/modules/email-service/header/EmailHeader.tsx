import React from 'react';
import { connect } from 'react-redux';
import { TextField } from 'src/common/components/text-field/TextField';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { IAuthenticationProps } from 'src/common/interface/IAuthentication';
import { color } from 'src/common/utils/getColor';
import { PaymentDrawer } from 'src/modules/email-service/components/payment-drawer/PaymentDrawer';
import { Payments } from 'src/modules/email-service/components/Payments';

interface IState {
    width: number;
}

/**
 *
 *
 * @class EmailHeader
 * @extends {React.Component<IAuthenticationProps>}
 */
class EmailHeaderBase extends React.Component<IAuthenticationProps, IState> {
    public lang = getLanguageFile();

    constructor(props: IAuthenticationProps) {
        super(props);

        this.state = {
            width: window.innerWidth,
        };
    }

    public componentWillReceiveProps(props: IAuthenticationProps) {
        window.addEventListener('resize', this.handleResize);
    }

    public componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    public handleResize = () => {
        this.setState({
            width: window.innerWidth,
        });
    };

    public renderContent() {
        let creditsText = this.lang.payments.credits;
        if (window.innerWidth <= 410) {
            creditsText = '';
        }
        switch (this.props.auth) {
            case null:
                return null;
            case false:
                return null;
            default:
                return (
                    <div style={{ marginRight: '25px', display: 'flex' }}>
                        <PaymentDrawer />
                        <Payments />
                        <div style={{ marginTop: '6px' }}>
                            <TextField
                                label="Credits"
                                value={this.props.auth.credits}
                                disableUnderline={true}
                                disableInput={true}
                                textIndentation="12px"
                                textColor={color().text}
                            >
                                {creditsText} {!!creditsText ? this.props.auth.credits : null}
                            </TextField>
                        </div>
                    </div>
                );
        }
    }
    public render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', right: '0px', position: 'absolute' }}>
                {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = ({ auth }: any) => {
    return { auth };
};

const EmailHeader = connect(mapStateToProps)(EmailHeaderBase);

export { EmailHeader };
