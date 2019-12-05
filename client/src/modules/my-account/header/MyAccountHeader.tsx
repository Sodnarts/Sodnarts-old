import { connect } from 'react-redux';

/**
 *
 *
 * @class HomeHeader
 * @extends {React.Component<IAuthenticationProps>}
 */
const MyAccountHeaderBase = () => {
    return null;
};

const mapStateToProps = ({ auth }: any) => {
    return { auth };
};

export const MyAccountHeader = connect(mapStateToProps)(MyAccountHeaderBase);
