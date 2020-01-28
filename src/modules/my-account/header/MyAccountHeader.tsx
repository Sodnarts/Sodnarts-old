import { connect } from 'react-redux';
import { IRootState } from 'src/common/state/reducers/IState';

/**
 *
 *
 * @class HomeHeader
 * @extends {React.Component<IAuthenticationProps>}
 */
const MyAccountHeaderBase = () => {
    return null;
};

const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

export const MyAccountHeader = connect(mapStateToProps)(MyAccountHeaderBase);
