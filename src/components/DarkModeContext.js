import React, { createContext, useState, useContext } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [staticDots, setStaticDots] = useState(false); // Add state for static dots

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const toggleStaticDots = () => { // Add function to toggle static dots
        setStaticDots(prevState => !prevState);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, staticDots, toggleStaticDots }}>
            {children}
        </DarkModeContext.Provider>
    );
};