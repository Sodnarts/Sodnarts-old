import React from 'react';
import { connect } from 'react-redux';
import { TextField } from 'src/common/components/text-field/TextField';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { IAuthenticationProps } from 'src/common/interface/IAuthentication';
import { IRootState } from 'src/common/state/reducers/IState';
import { color } from 'src/common/utils/getColor';
import { PaymentDrawer } from 'src/modules/email-service/components/payment-drawer/PaymentDrawer';
import { Payments } from 'src/modules/email-service/components/Payments';

interface IState {
    credits: string;
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
            credits: !!props.auth ? props.auth.credits.toString() : '0',
            width: window.innerWidth,
        };
    }

    public componentWillReceiveProps(props: IAuthenticationProps) {
        this.setState({
            credits: !!props.auth ? props.auth.credits.toString() : '0',
        });
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

    public renderContent(credits: string) {
        switch (this.props.auth) {
            case null:
                return null;
            case undefined:
                return null;
            default:
                return (
                    <div style={{ marginRight: '25px', display: 'flex' }}>
                        <PaymentDrawer />
                        <Payments />
                        <div style={{ marginTop: '6px' }}>
                            <TextField
                                label="Credits"
                                value={credits}
                                disableUnderline={true}
                                disableInput={true}
                                textIndentation="12px"
                                textColor={color().text}
                            />
                        </div>
                    </div>
                );
        }
    }
    public render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', right: '0px', position: 'absolute' }}>
                {this.renderContent(this.state.credits)}
            </div>
        );
    }
}

const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

const EmailHeader = connect(mapStateToProps)(EmailHeaderBase);

export { EmailHeader };
