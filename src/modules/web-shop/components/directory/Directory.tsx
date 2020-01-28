import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from 'src/modules/web-shop/components/directory/DirectorySelectors';
import 'src/modules/web-shop/components/directory/DirectoryStyles.scss';
import { MenuItem } from 'src/modules/web-shop/components/menu-item/MenuItem';
import { IDirectory } from 'src/modules/web-shop/redux/directory/IDirectory';

interface IProps {
    sections: IDirectory[];
}

const DirectoryBase = ({ sections }: IProps) => {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...props }: IDirectory) => (
                <MenuItem key={id} {...props} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

const Directory = connect(mapStateToProps)(DirectoryBase);

export { Directory };
