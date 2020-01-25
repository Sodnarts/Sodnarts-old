import { connect } from 'react-redux';
import { IAuthenticationProps } from 'src/common/interface/IAuthentication';

/**
 *
 *
 * @class HomeHeader
 * @extends {React.Component<IAuthenticationProps>}
 */
const HomeHeaderBase = (props: IAuthenticationProps) => {
    return null;
};

const mapStateToProps = ({ auth }: any) => {
    return { auth };
};

const HomeHeader = connect(mapStateToProps)(HomeHeaderBase);

export { HomeHeader };
