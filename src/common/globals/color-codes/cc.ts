import { IColor } from 'src/common/utils/getColor';

interface IColorSheet {
    themes: IColorProperty;
}

interface IColorProperty {
    [key: string]: {
        colors: IColor;
        value: string;
    };
}

export const cc: IColorSheet = {
    themes: {
        blue: {
            colors: {
                background: 'white',
                border: '#144ca8',
                divider: '#121212',
                primary: '#2196f3',
                secondary: '#1976d2',
                secondaryText: 'black',
                text: 'white',
            },
            value: 'blue',
        },
        dark: {
            colors: {
                background: 'black',
                border: '#4d4d4d',
                divider: '#f5f5f5',
                primary: '#292929',
                secondary: '#121212',
                secondaryText: 'white',
                text: 'white',
            },
            value: 'dark',
        },
        gray: {
            colors: {
                background: 'white',
                border: '#262626',
                divider: '#121212',
                primary: '#8c8c8c',
                secondary: '#696969',
                secondaryText: 'black',
                text: 'white',
            },
            value: 'gray',
        },
        green: {
            colors: {
                background: 'white',
                border: '#1b5e20',
                divider: '#121212',
                primary: '#00c853',
                secondary: '#43a047',
                secondaryText: 'black',
                text: 'white',
            },
            value: 'green',
        },
        light: {
            colors: {
                background: 'white',
                border: '#b0b0b0',
                divider: '#121212',
                primary: '#f5f5f5',
                secondary: '#ffffff',
                secondaryText: 'black',
                text: 'black',
            },
            value: 'light',
        },
        orange: {
            colors: {
                background: 'white',
                border: '#ff5e00',
                divider: '#121212',
                primary: '#ff9d00',
                secondary: '#ff7b00',
                secondaryText: 'black',
                text: 'white',
            },
            value: 'orange',
        },
        pink: {
            colors: {
                background: 'white',
                border: '#c70a76',
                divider: '#121212',
                primary: '#ff4db2',
                secondary: '#ed0e8d',
                secondaryText: 'black',
                text: 'white',
            },
            value: 'pink',
        },
        red: {
            colors: {
                background: 'white',
                border: '#b00012',
                divider: '#121212',
                primary: '#f44336',
                secondary: '#d32f2f',
                secondaryText: 'black',
                text: 'white',
            },
            value: 'red',
        },
        yellow: {
            colors: {
                background: 'white',
                border: '#ffd000',
                divider: '#121212',
                primary: '#ffe100',
                secondary: '#e6cf09',
                secondaryText: 'black',
                text: 'black',
            },
            value: 'yellow',
        },
    },
};
