import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { useEffect } from "react";

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

export const ThemeDropdown: React.FC = () => {
    const { setTextColor, setBackgroundColor, setHeaderColor } = useTheme();
    const [selectedColor, setSelectedTheme] = useState<string>('Theme');
    const [options, setOptions] = useState<Options[]>([]);

    useEffect(() => {
        const storedThemes = localStorage.getItem('themes');
        console.log('storedThemes', storedThemes);
        if (storedThemes) {
            const themesArray = JSON.parse(storedThemes);
            setOptions(themesArray);
            console.log('options', options);
        }
    }, [options]);

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
                style={{ width: `${selectedColor.length * 8 + 50}px` }}>
                <option value='theme'>Themes</option>
                {options.map((option, index) => (
                    <option key={index} value={option.themeName}>
                        {option.themeName}
                    </option>
                ))}
            </select>
        </div>
    )
}