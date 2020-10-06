import React from 'react';
import { connect } from 'react-redux';
import { IAuthState, IRootState } from 'src/common/state/reducers/IState';
import { UserOverview } from 'src/modules/user-admin/components/user-overview/UserOverview';

interface IProps {
    auth: IAuthState;
}

const DashboardBase = ({ auth }: IProps) => {
    // const username = !!auth ? (!!auth.firstName ? auth.firstName : auth.googleName) : 'No User';

    return (
        <div style={{ marginLeft: '32px', marginRight: '32px', marginTop: '16px' }}>
            <UserOverview />
        </div>
    );
};

const mapStateToProps = ({ auth }: IRootState) => {
    return { auth };
};

const Dashboard = connect(mapStateToProps)(DashboardBase);

export { Dashboard };
