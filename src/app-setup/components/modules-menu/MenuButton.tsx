import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'src/common/state/actions';
import { color } from 'src/common/utils/getColor';

interface IProps {
    toggleModulesMenu?: () => void;
}

class MenuButtonBase extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <div>
                <Button style={{ color: color().text }} onClick={this.props.toggleModulesMenu}>
                    {'Modules'}
                </Button>
            </div>
        );
    }
}

const mapStateToProps = ({ theme }: any) => {
    return theme;
};
const MenuButton = connect(mapStateToProps, actions)(MenuButtonBase);

export { MenuButton };
