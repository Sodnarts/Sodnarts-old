import { Button } from '@material-ui/core';
import React from 'react';

class MenuButtonBase extends React.Component {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    public render() {
        return <Button>{'Menu'}</Button>;
    }
}

const MenuButton = MenuButtonBase;

export { MenuButton };
