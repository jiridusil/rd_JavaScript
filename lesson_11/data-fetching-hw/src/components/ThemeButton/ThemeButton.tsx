import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { Theme } from "../Types/GeneralTypes";
import { themeDefaults } from "../Types/GeneralTypes";

export const ThemeButton: React.FC = () => {
    const { textColor, setTextColor, backgroundColor, setBackgroundColor, setSelectedTheme } = useTheme();
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            setBackgroundColor(newTheme === 'light' ? themeDefaults.lightColor : themeDefaults.darkColor);
            setTextColor(newTheme === 'light' ? themeDefaults.darkColor : themeDefaults.lightColor);
            setSelectedTheme('Themes');
            return newTheme;
        });
    }

    return (
        <div>

            <button onClick={toggleTheme}
                className='hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                style={{ color: textColor, background: backgroundColor, border: '1px solid', marginLeft: '100px' }}>
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
        </div >
    )
}