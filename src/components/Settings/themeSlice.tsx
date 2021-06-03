import { createSlice } from '@reduxjs/toolkit';
import { LocalStorage } from '../../utils/webStorageWrapper';

export interface CustomTheme {
    fontColor: string;
    backgroundColor: string;
    navColor?: string;
    boxShadow?: string;
    isDarkTheme?: boolean;
}

const DARK_THEME: CustomTheme = {
    fontColor: '#ffffff',
    backgroundColor: '#1e1e1e',
    navColor: '#292828',
    boxShadow: '-1px 0px 15px 0px #000000'
    // isDarkTheme: true
};

const LIGHT_THEME: CustomTheme = {
    fontColor: '#1e1e1e',
    backgroundColor: '#ffffff',
    navColor: '#eeeeee',
    boxShadow: '-1px 0px 15px 0px #A6A6A6'
    // isDarkTheme: false
};

/**
 * Default context is light theme
 * TODO: Make it correct regarding initial async data
 */
export const initialState: CustomTheme = {
    ...(LocalStorage.getItem('isDarkTheme') === true ? DARK_THEME : LIGHT_THEME)
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeToggled(state) {
            state.isDarkTheme = !state.isDarkTheme;
            // Awful solution, but the state won't update updating the entire object
            if (!state.isDarkTheme) {
                state.backgroundColor = LIGHT_THEME.backgroundColor;
                state.boxShadow = LIGHT_THEME.boxShadow;
                state.fontColor = LIGHT_THEME.fontColor;
                state.navColor = LIGHT_THEME.navColor;
                // state = { ...LIGHT_THEME };
            } else {
                state.backgroundColor = DARK_THEME.backgroundColor;
                state.boxShadow = DARK_THEME.boxShadow;
                state.fontColor = DARK_THEME.fontColor;
                state.navColor = DARK_THEME.navColor;
                // state = { ...DARK_THEME };
            }
        }
    }
});

export const { themeToggled } = themeSlice.actions;

export default themeSlice.reducer;
