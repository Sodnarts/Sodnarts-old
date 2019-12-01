import React from 'react';
import { connect } from 'react-redux';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { IAuthenticationProps } from 'src/common/interface/IAuthentication';
import { color } from 'src/common/utils/getColor';
import { PaymentDrawer } from 'src/modules/email-service/components/PaymentDrawer';
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
                    <ul className="right">
                        <li className="right" style={{ color: color().text, paddingLeft: '10px', paddingRight: '0px' }}>
                            {creditsText} {!!(creditsText !== '') ? this.props.auth.credits : null}
                        </li>
                        <Payments />
                    </ul>
                );
        }
    }
    public render() {
        return (
            <div>
                <div>
                    {this.renderContent()}
                    <PaymentDrawer />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }: any) => {
    return { auth };
};

const EmailHeader = connect(mapStateToProps)(EmailHeaderBase);

export { EmailHeader };
