import { IAuthState } from 'src/common/state/reducers/IState';

export interface IProps {
    auth: IAuthState;
    updateRender: (componentNumber: number) => void;
}
