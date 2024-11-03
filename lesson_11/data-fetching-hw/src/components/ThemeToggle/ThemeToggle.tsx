import { useTheme } from "../ThemeContext";

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`${theme === 'dark' && 'bg-gray-900'}`}>

            <button onClick={toggleTheme} className="p-2 bg-gray-200 rounded">
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
        </div>
    )
}