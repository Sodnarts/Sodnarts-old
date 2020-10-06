import { Paper, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { TextField } from 'src/common/components/text-field/TextField';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { IAuthState, IRootState } from 'src/common/state/reducers/IState';
import { color, IColor } from 'src/common/utils/getColor';
import { styles } from 'src/modules/my-account/components/profile/ProfileStyles';
import * as actions from 'src/modules/my-account/redux/actions';
import { IAccount } from 'src/modules/my-account/redux/actions/IActions';

interface IProps {
    auth: IAuthState;
    changeAccountSettings(value: IAccount): void;
}

interface IState {
    user: any; // Has to be any in order to index the object dynamically through the type property in state.
    fields: Array<{ label: string; type: string }>;
}

type IProfile = IProps & WithStyles<typeof styles>;

/**
 * Profile component
 *
 * @class ProfileBase
 * @extends {React.Component<IProfile>}
 */
class ProfileBase extends React.Component<IProfile, IState> {
    public color: IColor = color();
    public lang = getLanguageFile();

    constructor(props: IProfile) {
        super(props);

        this.state = {
            fields: [
                { label: this.lang.myaccount.profile.firstName, type: 'firstName' },
                { label: this.lang.myaccount.profile.lastName, type: 'lastName' },
                { label: this.lang.myaccount.profile.email, type: 'email' },
                { label: this.lang.myaccount.profile.phoneNo, type: 'phoneNo' },
                { label: this.lang.myaccount.profile.address, type: 'address' },
                { label: this.lang.myaccount.profile.city, type: 'city' },
            ],
            user: this.props.auth,
        };
    }

    public componentWillReceiveProps(props: IProfile) {
        this.lang = getLanguageFile();

        this.setState({
            user: props.auth,
        });
    }

    public onBlur = (label: string) => (value: string | number) => {
        let valueToChange = {};
        switch (label) {
            case this.lang.myaccount.profile.firstName:
                valueToChange = { firstName: value };
                break;
            case this.lang.myaccount.profile.lastName:
                valueToChange = { lastName: value };
                break;
            case this.lang.myaccount.profile.email:
                valueToChange = { email: value };
                break;
            case this.lang.myaccount.profile.phoneNo:
                valueToChange = { phoneNo: value };
                break;
            case this.lang.myaccount.profile.address:
                valueToChange = { address: value };
                break;
            case this.lang.myaccount.profile.city:
                valueToChange = { city: value };
                break;
        }

        if (valueToChange.toString() !== '{}') {
            this.props.changeAccountSettings(valueToChange);
        }
    };

    public renderTextFields = () => {
        const { user, fields } = this.state;
        const { classes } = this.props;

        return (
            <div className={classes.textFieldContainer}>
                {fields.map(({ label, type }) => {
                    return (
                        <TextField
                            textColor={this.color.text}
                            key={label.toString()}
                            className={classes.textField}
                            onInputBlur={this.onBlur(label)}
                            disableUnderline={false}
                            numberInput={!!(type === 'phoneNo') ? true : false}
                            label={label.toString()}
                            value={!!user ? user[type] : ''}
                        />
                    );
                })}
            </div>
        );
    };
    public render() {
        const { classes } = this.props;
        const shouldElevate = !!(window.innerWidth > 960) ? true : false;

        return (
            <Paper
                elevation={!!shouldElevate ? 1 : 0}
                style={{
                    backgroundColor: this.color.secondary,
                }}
                className={classes.container}
            >
                {this.renderTextFields()}
            </Paper>
        );
    }
}

const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

export const Profile = connect(mapStateToProps, actions)(withStyles(styles)(ProfileBase));
