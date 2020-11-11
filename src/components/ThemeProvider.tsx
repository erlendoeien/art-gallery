// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { LocalStorage } from '../utils/webStorageWrapper';

export interface IThemeContext {
    fontColor: string;
    backgroundColor: string;
    navColor?: string;
    boxShadow?: string;
    isDarkTheme: boolean;
    toggleTheme: () => void;
}

/**
 * Default context is light theme
 */
export const ThemeContext = React.createContext<IThemeContext>({
    fontColor: '#1e1e1e',
    backgroundColor: '#ffffff',
    navColor: '#eeeeee',
    boxShadow: '-1px 0px 15px 0px #A6A6A6',
    isDarkTheme: false,
    toggleTheme: () => {}
});

export const ThemeProvider: React.FC<React.ReactNode> = (
    props: React.PropsWithChildren<React.ReactNode>
) => {
    const { children } = props;
    const [isDarkTheme, setDarkTheme] = useState<boolean>(
        LocalStorage.getItem('isDarkTheme') === true
    );
    let fontColor: string;
    let backgroundColor: string;
    let navColor: string;
    let boxShadow: string;

    /**
     * Update theme storage when changed
     */
    useEffect(() => {
        // no boolean direct parse
        const storedIsDark = LocalStorage.getItem('isDarkTheme') === true;
        if (storedIsDark !== isDarkTheme) LocalStorage.setItem('isDarkTheme', isDarkTheme);
    }, [isDarkTheme]);

    /**
     * A wrapper so one doesn't have to call the setDarkTheme explicitly
     * e.g. <... onClick={() => setDarkTheme(false)} /> as this would generate
     * a new function signature for every render. onClick={toggleTheme} does not
     */
    const toggleTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme);
    };

    if (isDarkTheme) {
        fontColor = '#ffffff';
        backgroundColor = '#1e1e1e';
        navColor = '#292828';
        boxShadow = '-1px 0px 15px 0px #000000';
    } else {
        fontColor = '#1e1e1e';
        backgroundColor = '#ffffff';
        navColor = '#eeeeee';
        boxShadow = '-1px 0px 15px 0px #A6A6A6';
    }

    return (
        <ThemeContext.Provider
            value={{ navColor, boxShadow, fontColor, backgroundColor, isDarkTheme, toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
