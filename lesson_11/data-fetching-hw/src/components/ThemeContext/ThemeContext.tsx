import { createContext, ReactNode, useContext, useState } from "react";
import { Theme, Options, ThemeContextType, defaultThemeContext, themeDefaults } from "../Types/GeneralTypes";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultThemeContext.theme);
    const [primaryColor, setPrimaryColor] = useState<string>(defaultThemeContext.primaryColor);
    const [secondaryColor, setSecondaryColor] = useState<string>(defaultThemeContext.secondaryColor);
    const [backgroundColor, setBackgroundColor] = useState<string>(defaultThemeContext.backgroundColor);
    const [headerColor, setHeaderColor] = useState<string>(defaultThemeContext.headerColor);
    const [textColor, setTextColor] = useState<string>(defaultThemeContext.textColor);
    const [buttonColor, setButtonColor] = useState<string>(defaultThemeContext.buttonColor);
    const [selectedTheme, setSelectedTheme] = useState<string>('');
    const [options, setOptions] = useState<Options[]>([]);

    const addTheme = (theme: Options) => {
        setOptions((prevOptions) => [...prevOptions, theme]);
        localStorage.setItem('themes', JSON.stringify([...options, theme]));
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: () => { },
                primaryColor,
                setPrimaryColor,
                secondaryColor,
                setSecondaryColor,
                backgroundColor,
                setBackgroundColor,
                headerColor,
                setHeaderColor,
                textColor,
                setTextColor,
                buttonColor,
                setButtonColor,
                buttonHoverColor: defaultThemeContext.buttonHoverColor,
                setButtonHoverColor: defaultThemeContext.setButtonHoverColor,
                optionsNew: options,
                addTheme,
                selectedTheme,
                setSelectedTheme
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