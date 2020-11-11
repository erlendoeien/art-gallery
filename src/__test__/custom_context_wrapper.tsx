/* eslint react/prop-types: 0 */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../components/ThemeProvider';
import { MoodProvider } from '../components/MoodProvider';

// Custom wrapper for render function,
// which wraps the component inside ThemeProvider and MoodProvider
export const Wrapper: React.ComponentType = ({ children }) => {
    return (
        <ThemeProvider>
            <MoodProvider>
                <MemoryRouter>{children}</MemoryRouter>
            </MoodProvider>
        </ThemeProvider>
    );
};

// re-export everything
export * from '@testing-library/react';
