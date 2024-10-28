import { useContext } from "react"
import { Label } from "../Label"
import { ThemeContext } from "../ThemeContext"

type Option = {
    value: string,
    label: string
}

type Props = {
    value: string,
    handleChange: React.ChangeEventHandler<HTMLSelectElement>,
    options: Option[],
    name: string,
    label: string
}

export const Select = ({ value, handleChange, options, name, label }: Props) => {
    const theme = useContext(ThemeContext);

    return (
        <>
            <Label htmlFor={name}>{label}</Label>
            <select
                id={name}
                name={name}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 ${theme === 'dark' && 'bg-black text-white'}`}
                value={value}
                onChange={handleChange}
            >
                {options.map(({ value, label }: Option) => (<option value={value}>{label}</option>))}
            </select>
        </>
    )
}