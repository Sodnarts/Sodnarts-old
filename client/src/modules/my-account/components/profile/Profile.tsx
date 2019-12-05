import { Paper } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/styles';
import React from 'react';
import { connect } from 'react-redux';
import { TextField } from 'src/common/components/text-field/TextField';
import * as actions from 'src/common/state/actions/index';
import { color } from 'src/common/utils/getColor';
import { styles } from 'src/modules/my-account/components/profile/ProfileStyles';

interface IProps {
    auth: any;
    changeAccountSettings(value: any): void;
}

interface IState {
    user: any;
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
    constructor(props: IProfile) {
        super(props);

        this.state = {
            fields: [
                { label: 'First Name', type: 'firstName' },
                { label: 'Last Name', type: 'lastName' },
                { label: 'E-Mail', type: 'email' },
                { label: 'Phone Number', type: 'phoneNo' },
                { label: 'Address', type: 'address' },
                { label: 'City', type: 'city' },
            ],
            user: this.props.auth,
        };

        this.renderTextFields = this.renderTextFields.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    public componentWillReceiveProps(props: IProfile) {
        this.setState({
            user: props.auth,
        });
    }

    public onBlur(value: string | number, label: string) {
        let valueToChange = {};
        switch (label) {
            case 'First Name':
                valueToChange = { firstName: value };
                break;
            case 'Last Name':
                valueToChange = { lastName: value };
                break;
            case 'E-Mail':
                valueToChange = { email: value };
                break;
            case 'Phone Number':
                valueToChange = { phoneNo: value };
                break;
            case 'Address':
                valueToChange = { address: value };
                break;
            case 'City':
                valueToChange = { city: value };
                break;
        }

        console.log(valueToChange);
        if (valueToChange.toString() !== '{}') {
            this.props.changeAccountSettings(valueToChange);
        }
    }

    public renderTextFields() {
        const { user, fields } = this.state;
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    position: 'absolute',
                    width: '100%',
                }}
            >
                {fields.map(({ label, type }) => {
                    return (
                        <TextField
                            key={label.toString()}
                            style={{ width: '40%', marginRight: '25px', marginBottom: '20px' }}
                            onInputBlur={this.onBlur}
                            disableUnderline={false}
                            label={label.toString()}
                            value={!!user ? user[type] : ''}
                        />
                    );
                })}
            </div>
        );
    }
    public render() {
        const { classes } = this.props;
        return (
            <Paper
                style={{
                    backgroundColor: color().secondary,
                }}
                className={classes.container}
            >
                {this.renderTextFields()}
            </Paper>
        );
    }
}

const mapStateToProps = ({ auth }: any) => {
    return { auth };
};

export const Profile = connect(mapStateToProps, actions)(withStyles(styles)(ProfileBase));