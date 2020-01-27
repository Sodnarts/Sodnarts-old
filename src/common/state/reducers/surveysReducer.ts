import { IFetchSurveysAction } from 'src/common/state/actions/IActions';
import { FETCH_SURVEYS } from 'src/common/state/actions/types';
import { ISurveysState } from 'src/common/state/reducers/IState';

export const surveysReducer = (state: ISurveysState = [], action: IFetchSurveysAction) => {
    switch (action.type) {
        case FETCH_SURVEYS:
            return action.payload;
        default:
            return state;
    }
};
