import React from 'react';
import { connect } from 'react-redux';
import { getLanguageFile } from 'src/common/globals/languages/lang';

/**
 *
 *
 * @class HomeHeader
 * @extends {React.Component<IAuthenticationProps>}
 */
const MyAccountHeaderBase = () => {
    const lang = getLanguageFile();

    return null;
};

const mapStateToProps = ({ auth }: any) => {
    return { auth };
};

export const MyAccountHeader = connect(mapStateToProps)(MyAccountHeaderBase);
