import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { useEffect } from "react";
import { Options } from "../Types/General";

export const ThemeDropdown: React.FC = () => {
    const { setTextColor, setBackgroundColor, setHeaderColor, optionsNew } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState<string>('Theme');
    const [options, setOption] = useState<Options[]>([]);

    useEffect(() => {
        const storedThemes = localStorage.getItem('themes');
        // console.log('storedThemes', storedThemes);
        if (storedThemes) {
            const themesArray = JSON.parse(storedThemes);
            // addTheme(themesArray);
            // options.push(themesArray);
            setOption(themesArray);
            if (themesArray.length > 0) {
                setSelectedTheme(themesArray[themesArray.length - 1].themeName);
            }
            console.log('themesArray', themesArray);
        }
    }, [optionsNew]);

    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTheme(e.target.value);
        setTextColor(options.find(option => option.themeName === e.target.value)?.textColor || '');
        setBackgroundColor(options.find(option => option.themeName === e.target.value)?.backgroundColor || '');
        setHeaderColor(options.find(option => option.themeName === e.target.value)?.headerColor || '');
    }

    return (
        <div className='flex items-center justify-center'>
            <select onChange={handleThemeChange}
                className='rounded-md px-3 py-2 mx-3 text-sm font-medium pr-10'
                style={{ width: `${selectedTheme.length * 8 + 50}px` }}>
                {options.map((option, index) => (
                    <option key={index} value={option.themeName}>
                        {option.themeName}
                    </option>
                ))}
            </select>
        </div>
    )
}