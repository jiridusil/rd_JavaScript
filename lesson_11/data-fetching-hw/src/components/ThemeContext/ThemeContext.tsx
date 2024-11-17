import { createContext, ReactNode, useContext, useState } from "react";
import { darkColor, lightColor, defaultHeaderColor } from "../Styles/colorConstants";

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
    textColor: string;
    setTextColor: (color: string) => void;
    headerColor: string;
    setHeaderColor: (color: string) => void;
    optionsNew: Options[];
    addTheme: (theme: Options) => void;
}

type Options = {
    themeName: string
    primaryColor: string
    secondaryColor: string
    textColor: string
    headerColor: string
    backgroundColor: string
    buttonColor: string
    buttonHoverColor: string
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');
    const [backgroundColor, setBackgroundColor] = useState<string>(lightColor);
    const [textColor, setTextColor] = useState<string>(darkColor);
    const [headerColor, setHeaderColor] = useState<string>(defaultHeaderColor);
    const [selectedTheme, setSelectedTheme] = useState<string>();
    const [options, setOptions] = useState<Options[]>([]);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            setBackgroundColor(newTheme === 'light' ? lightColor : darkColor);
            setTextColor(newTheme === 'light' ? darkColor : lightColor);
            setSelectedTheme('Themes');
            return newTheme;
        });
    }

    const addTheme = (theme: Options) => {
        setOptions((prevOptions) => [...prevOptions, theme]);
        localStorage.setItem('themes', JSON.stringify([...options, theme]));
    };


    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
                backgroundColor,
                setBackgroundColor,
                textColor,
                setTextColor,
                headerColor,
                setHeaderColor,
                optionsNew: options,
                addTheme
            }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeContextProvider');
    }
    return context;
};