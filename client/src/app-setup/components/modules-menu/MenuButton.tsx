import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'src/common/state/actions';

interface IProps {
    toggleModulesMenu: () => void;
}

class MenuButtonBase extends React.Component<IProps> {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <div>
                <Button onClick={this.props.toggleModulesMenu}>{'Modules'}</Button>
            </div>
        );
    }
}

const MenuButton = connect(null, actions)(MenuButtonBase);

export { MenuButton };
