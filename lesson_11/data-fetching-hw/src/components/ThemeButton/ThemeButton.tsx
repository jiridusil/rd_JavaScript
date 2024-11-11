import { useTheme } from "../ThemeContext";

export const ThemeButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`${theme === 'dark'}`}>

            <button onClick={toggleTheme} className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
        </div>
    )
}