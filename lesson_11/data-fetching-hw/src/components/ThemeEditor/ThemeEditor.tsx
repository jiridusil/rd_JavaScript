import { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import { ColorPicker } from "antd";
import { Button } from "antd";


export const ThemeEditor: React.FC = () => {
    const [themesArray, setThemesArray] = useState<any[]>([]);

    useEffect(() => {
        const storedThemes = localStorage.getItem('themes');
        if (storedThemes) {
            setThemesArray(JSON.parse(storedThemes));
        }
    }, []);

    const deleteTheme = (nazev: string) => {
        const data = localStorage.getItem('themes');
        if (data) {
            const themes = JSON.parse(data);
            const newThemes = themes.filter((theme: any) => theme.themeName !== nazev);
            localStorage.setItem('themes', JSON.stringify(newThemes));
            setThemesArray(newThemes);
        }
        console.log('storage: ', localStorage.getItem('themes'));
    };

    return (
        <>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>Theme Editor</h1>
                <p>Kliknutím na příslušnou barvu a následným kliknutím na tlačítko <b>Save</b> můžeme změnit barvu daného elementu.</p>
                <p>Případně je možné Theme smazat kliknutím na lačítko <b>Delete</b></p>

            </div>

            <div className='flex items-center justify-center'>


                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th className='border px-4 py-2 text-center'>Theme Name</th>
                            <th className='border px-4 py-2 text-center'>Primary</th>
                            <th className='border px-4 py-2 text-center'>Secondary</th>
                            <th className='border px-4 py-2 text-center'>Text</th>
                            <th className='border px-4 py-2 text-center'>Header</th>
                            <th className='border px-4 py-2 text-center'>Background</th>
                            <th className='border px-4 py-2 text-center'>Button</th>
                            <th className='border px-4 py-2 text-center'>Button Hover</th>
                            <th className='border px-4 py-2 text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {themesArray.map((theme, index) => (
                            <tr key={index}>
                                <td className='border px-4 py-2'><b>{theme.themeName}</b></td>
                                <td className='border px-4 py-2'><ColorPicker defaultValue={theme.primaryColor} /></td>
                                <td className='border px-4 py-2'><ColorPicker defaultValue={theme.secondaryColor} /></td>
                                <td className='border px-4 py-2'><ColorPicker defaultValue={theme.textColor} /></td>
                                <td className='border px-4 py-2'><ColorPicker defaultValue={theme.headerColor} /></td>
                                <td className='border px-4 py-2'><ColorPicker defaultValue={theme.backgroundColor} /></td>
                                <td className='border px-4 py-2'><ColorPicker defaultValue={theme.buttonColor} /></td>
                                <td className='border px-4 py-2'><ColorPicker defaultValue={theme.buttonHoverColor} /></td>
                                <td className='border px-4 py-2'>
                                    <Button className='mx-1' type="primary">Save</Button>
                                    <Button className='mx-1' type="primary" danger
                                        onClick={() => { deleteTheme(theme.themeName) }}>Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}   