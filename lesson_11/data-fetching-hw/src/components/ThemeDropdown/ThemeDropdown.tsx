import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { useEffect } from "react";
import { Options } from "../Types/GeneralTypes";

export const ThemeDropdown: React.FC = () => {
    const { setPrimaryColor, setSecondaryColor, backgroundColor, setBackgroundColor, setHeaderColor,
        textColor, setTextColor, setButtonColor, setButtonHoverColor, optionsNew, selectedTheme,
        setSelectedTheme } = useTheme();
    const [options, setOption] = useState<Options[]>([]);

    useEffect(() => {
        const storedThemes = localStorage.getItem('themes');
        if (storedThemes) {
            const themesArray = JSON.parse(storedThemes);
            setOption(themesArray);
            if (themesArray.length > 0) {
                setSelectedTheme(themesArray[themesArray.length - 1].themeName);
            }
            console.log('themesArray', themesArray);
        }
    }, [optionsNew]);

    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTheme(e.target.value);
        setPrimaryColor(options.find(option => option.themeName === e.target.value)?.primaryColor || '');
        setSecondaryColor(options.find(option => option.themeName === e.target.value)?.secondaryColor || '');
        setBackgroundColor(options.find(option => option.themeName === e.target.value)?.backgroundColor || '');
        setHeaderColor(options.find(option => option.themeName === e.target.value)?.headerColor || '');
        setTextColor(options.find(option => option.themeName === e.target.value)?.textColor || '');
        setButtonColor(options.find(option => option.themeName === e.target.value)?.buttonColor || '');
        setButtonHoverColor(options.find(option => option.themeName === e.target.value)?.buttonHoverColor || '');
    }

    return (
        <div className='flex items-center justify-center'>
            <select onChange={handleThemeChange}
                value={selectedTheme}
                className='rounded-md px-3 py-2 mx-3 text-sm font-medium pr-10'
                style={{
                    width: `${selectedTheme.length * 8 + 50}px`, background: backgroundColor,
                    color: textColor, border: `1px solid ${textColor}`
                }}
            >
                <option value='Theme'>Themes</option>
                {options.map((option, index) => (
                    <option key={index} value={option.themeName}>
                        {option.themeName}
                    </option>
                ))}
            </select>
        </div>
    )
}