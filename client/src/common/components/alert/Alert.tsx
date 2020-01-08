import { Button, Snackbar, WithStyles, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { styles } from 'src/common/components/alert/AlertStyles';

interface IProps {
    isOpen: boolean;
    message: string;
    positionRight?: boolean;
    positionTop?: boolean;
    handleOnClose(): void;
}

type IAlert = IProps & WithStyles<typeof styles>;

class AlertBase extends React.Component<IAlert> {
    constructor(props: IAlert) {
        super(props);
    }

    public handleClose(event: any, reason: any) {
        if (reason === 'clickaway') {
            return;
        }
    }

    public getAction = () => {
        const { classes } = this.props;

        return (
            <Button onClick={this.props.handleOnClose}>
                <CloseIcon className={classes.icon} />
            </Button>
        );
    };

    public render() {
        const { isOpen, classes, message, positionRight, positionTop } = this.props;
        return (
            <Snackbar
                anchorOrigin={{
                    horizontal: !!positionRight ? 'right' : 'left',
                    vertical: !!positionTop ? 'top' : 'bottom',
                }}
                className={classes.margin}
                open={isOpen}
                onClose={this.handleClose}
                message={<span className={classes.text}>{message}</span>}
                action={this.getAction()}
            />
        );
    }
}

const Alert = withStyles(styles)(AlertBase);

export { Alert };
