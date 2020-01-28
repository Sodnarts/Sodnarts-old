import { connect } from 'react-redux';
import { IAuthenticationProps } from 'src/common/interface/IAuthentication';
import { IRootState } from 'src/common/state/reducers/IState';

/**
 *
 *
 * @class HomeHeader
 * @extends {React.Component<IAuthenticationProps>}
 */
const HomeHeaderBase = (props: IAuthenticationProps) => {
    return null;
};

const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

const HomeHeader = connect(mapStateToProps)(HomeHeaderBase);

export { HomeHeader };
