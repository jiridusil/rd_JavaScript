import { useContext } from "react"
import { ThemeContext } from "../ThemeContext";

type Props = {
    htmlFor: string
    children: React.ReactNode,
}

export const Label = ({ children, htmlFor }: Props) => {
    const theme = useContext(ThemeContext);

    return (
        <label htmlFor={htmlFor} className={`block text-sm font-medium leading-6 text-gray-900
        ${theme === 'dark' && 'text-white'}`}>
            {children}
        </label>
    )
}