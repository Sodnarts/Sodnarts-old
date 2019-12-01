import { store } from '../../../index';
import { de } from './de';
import { en } from './en';
import { no } from './no';

export const getLanguageFile: any = () => {
    let state;
    let language;
    if (!!store) {
        state = store.getState();
        if (!!state.language) {
            language = state.language;
        }
    }
    switch (language) {
        case 'en':
            return en;
        case 'no':
            return no;
        case 'de':
            return de;
    }

    // If no file was found, return english.
    return en;
};

export const lang = getLanguageFile();
