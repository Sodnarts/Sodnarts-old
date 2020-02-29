import { Button, Snackbar, WithStyles, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { styles } from 'src/common/components/alert/AlertStyles';
import { AlertType } from 'src/common/state/actions/types';

interface IProps {
    isOpen: boolean;
    message: string;
    type: AlertType;
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
        const { classes, type } = this.props;

        return (
            <Button onClick={this.props.handleOnClose}>
                <CloseIcon className={!!(type === AlertType.info) ? classes.iconInfo : classes.iconError} />
            </Button>
        );
    };

    public render() {
        const { isOpen, classes, message, type } = this.props;
        return (
            <Snackbar
                ContentProps={{
                    classes: {
                        root: !!(type === AlertType.info) ? classes.info : classes.error,
                    },
                }}
                anchorOrigin={{
                    horizontal: !!(type === AlertType.info) ? 'right' : 'left',
                    vertical: !!(type === AlertType.info) ? 'top' : 'bottom',
                }}
                open={isOpen}
                onClose={this.handleClose}
                message={
                    <span className={!!(type === AlertType.info) ? classes.textInfo : classes.textError}>
                        {message}
                    </span>
                }
                action={this.getAction()}
            />
        );
    }
}

const Alert = withStyles(styles)(AlertBase);

export { Alert };
