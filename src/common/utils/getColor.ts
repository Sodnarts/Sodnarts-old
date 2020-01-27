import { store } from 'src/common/state/store';

export function color(): IColor {
    const state = store.getState();

    return {
        background: !!state.account.theme ? state.account.theme.background : 'white',
        border: !!state.account.theme ? state.account.theme.border : '#144ca8',
        divider: !!state.account.theme ? state.account.theme.divider : 'black',
        primary: !!state.account.theme ? state.account.theme.primary : '#2196f3',
        secondary: !!state.account.theme ? state.account.theme.secondary : '#1976d2',
        secondaryText: !!state.account.theme ? state.account.theme.secondaryText : 'black',
        text: !!state.account.theme ? state.account.theme.text : 'white',
    };
}

export interface IColor {
    background: string;
    border: string;
    divider: string;
    primary: string;
    secondary: string;
    secondaryText: string;
    text: string;
}
