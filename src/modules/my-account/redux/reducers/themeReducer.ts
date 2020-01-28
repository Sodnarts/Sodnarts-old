import { cc } from 'src/common/globals/color-codes/cc';
import { FETCH_THEME } from 'src/common/state/actions/types';
import { IColor } from 'src/common/utils/getColor';
import { IChangeThemeAction } from 'src/modules/my-account/redux/actions/IActions';

export const themeReducer = (color: IColor = cc.themes.light.colors, action: IChangeThemeAction) => {
    switch (action.type) {
        case FETCH_THEME:
            switch (action.payload) {
                case 'blue':
                    return (color = cc.themes.blue.colors);
                case 'red':
                    return (color = cc.themes.red.colors);
                case 'green':
                    return (color = cc.themes.green.colors);
                case 'gray':
                    return (color = cc.themes.gray.colors);
                case 'yellow':
                    return (color = cc.themes.yellow.colors);
                case 'pink':
                    return (color = cc.themes.pink.colors);
                case 'orange':
                    return (color = cc.themes.orange.colors);
                case 'light':
                    return (color = cc.themes.light.colors);
                case 'dark':
                    return (color = cc.themes.dark.colors);
                default:
                    return (color = cc.themes.light.colors);
            }
        default:
            return color;
    }
};
