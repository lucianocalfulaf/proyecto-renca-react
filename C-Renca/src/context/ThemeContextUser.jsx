import { createContext, useEffect, useState } from 'react';

// Modo oscuro usuario principal
const themes = {
    dark: {
        backgroundColor: '#232424', 
        color: '#F9F6EE'
    },
    light: {
        backgroundColor: '#F59F30',
        color: '#F9F6EE'
    }
}

// Modo oscuro vistas administrador
const adminThemes = {
    dark: {
        backgroundColor: '#232424',
        color: '#F9F6EE'
    },
    light: {
        backgroundColor: '#009A88',
        color: '#fff'
    }
}

const adminThemesTwo = {
    dark: {
        backgroundColor: 'rgba(0, 0, 0, 0.74)', 
        color: '#F9F6EE'
    },
    light: {
        backgroundColor: '#60BDB1', 
        color: '#F9F6EE'
    }
}

const adminThemesThree = {
    dark: {
        backgroundColor: 'rgba(0, 0, 0, 0.74)',
    },
    light: {
        backgroundColor: '#009A88',
        color: '#fff'
    }
}

const tableTheme = {
    dark: {
        backgroundColor: 'rgba(0, 0, 0, 0.74)',
        color: '#fff'
    },
    light: {
        backgroundColor: ''
    }
}

// Modo Oscuro para contenedor
const mainThemes = {
    dark: {
        backgroundColor: '#494b4c', 
        color: '#F9F6EE'
    },
    light: {
        backgroundColor: '#F9F6EE',
        color: '#494b4c'
    }
}

const loginThemes = {
    dark: {
        backgroundColor: 'rgba(0, 0, 0, 0.49)', 
        color: '#F9F6EE'
    },
    light: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        color: '#494b4c'
    }
}

export const ThemeContextUser = createContext();

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);
    const theme = isDark ? themes.dark : themes.light;
    const mainTheme = isDark ? mainThemes.dark : mainThemes.light;
    const loginTheme = isDark ? loginThemes.dark : loginThemes.light;
    const adminTheme = isDark ? adminThemes.dark : adminThemes.light;
    const adminThemeTwo = isDark ? adminThemesTwo.dark : adminThemesTwo.light;
    const adminThemeThree = isDark ? adminThemesThree.dark : adminThemesThree.light;
    const toggleTheme = () => {
        localStorage.setItem('isDark', JSON.stringify(!isDark));
        setIsDark(!isDark);
    };

    useEffect(() => {
        const isDark = localStorage.getItem('isDark') === "true";
        setIsDark(isDark);
    }, []);

    return (
        <ThemeContextUser.Provider value={[{
            theme,
            mainTheme,
            loginTheme,
            adminTheme,
            adminThemeTwo,
            adminThemeThree,
            isDark 
        }, toggleTheme]}>
            {children}
        </ThemeContextUser.Provider>
    );
}