import { combineReducers, Reducer } from 'redux';
import { IGetUsersAction } from 'src/modules/user-admin/redux/actions/IActions';
import { IUserAdminState } from 'src/modules/user-admin/redux/reducers/IState';
import { usersReducer } from 'src/modules/user-admin/redux/reducers/usersReducer';

const userAdminReducer: Reducer<IUserAdminState, IGetUsersAction> = combineReducers({
    users: usersReducer,
});

export { userAdminReducer };
