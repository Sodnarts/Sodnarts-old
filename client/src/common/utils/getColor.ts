import { store } from 'src/common/state/store';

export function color() {
    const state = store.getState();

    return {
        background: !!state.theme ? state.theme.background : 'white',
        border: !!state.theme ? state.theme.border : '#144ca8',
        divider: !!state.theme ? state.theme.divider : 'black',
        primary: !!state.theme ? state.theme.primary : '#2196f3',
        secondary: !!state.theme ? state.theme.secondary : '#1976d2',
        secondaryText: !!state.theme ? state.theme.secondaryText : 'black',
        text: !!state.theme ? state.theme.text : 'white',
    };
}
