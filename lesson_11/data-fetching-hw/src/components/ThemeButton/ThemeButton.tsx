import { useTheme } from "../ThemeContext";

export const ThemeButton: React.FC = () => {
    const { theme, toggleTheme, textColor, backgroundColor } = useTheme();


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