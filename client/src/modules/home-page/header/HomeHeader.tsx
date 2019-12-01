import React from 'react';
import { connect } from 'react-redux';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { IAuthenticationProps } from 'src/common/interface/IAuthentication';

/**
 *
 *
 * @class HomeHeader
 * @extends {React.Component<IAuthenticationProps>}
 */
const HomeHeaderBase = (props: IAuthenticationProps) => {
    const lang = getLanguageFile();

    return null;
};

const mapStateToProps = ({ auth }: any) => {
    return { auth };
};

const HomeHeader = connect(mapStateToProps)(HomeHeaderBase);

export { HomeHeader };
