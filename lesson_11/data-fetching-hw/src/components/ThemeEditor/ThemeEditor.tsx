import { useEffect, useState } from "react";
import { ColorPicker } from "antd";
import { Button } from "antd";
import { Options } from "../Types/GeneralTypes";
import { useTheme } from "../ThemeContext";


export const ThemeEditor: React.FC = () => {
    const { textColor, setPrimaryColor, setSecondaryColor, setBackgroundColor, setHeaderColor, setTextColor,
        setButtonColor, setButtonHoverColor } = useTheme();

    const [themesArray, setThemesArray] = useState<Options[]>([]);

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
            const newThemes = themes.filter((theme: Options) => theme.themeName !== nazev);
            localStorage.setItem('themes', JSON.stringify(newThemes));
            setThemesArray(newThemes);
        }
        console.log('storage: ', localStorage.getItem('themes'));
    };

    const updateTheme = (updatedTheme: Options) => {
        console.log('updatedTheme: ', updatedTheme);
        const data = localStorage.getItem('themes');
        const themes = JSON.parse(data!);
        const newThemes = themes.map((theme: Options) =>
            theme.themeName === updatedTheme.themeName ? updatedTheme : theme
        );
        localStorage.setItem('themes', JSON.stringify(newThemes));
        console.log('co tu mame: ', newThemes);
        setThemesArray(newThemes);

    };

    return (
        <>
            <div className='text-center' style={{ color: textColor }}>
                <h1 className='text-2xl font-bold'>Theme Editor</h1>
                <p>Kliknutím na příslušnou barvu a následným kliknutím na tlačítko <b>Save</b> můžeme změnit barvu daného elementu.</p>
                <p>Případně je možné Theme smazat kliknutím na lačítko <b>Delete</b></p>
            </div>
            <div className='flex items-center justify-center' style={{ color: textColor }}>
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
                                <td className='border px-4 py-2'><ColorPicker defaultValue={theme.primaryColor}
                                    onChange={(color) => {
                                        theme.primaryColor = color.toHexString();
                                        setPrimaryColor(color.toHexString());
                                    }} /></td>
                                <td className='border px-4 py-2'><ColorPicker defaultValue={theme.secondaryColor}
                                    onChange={(color) => {
                                        theme.secondaryColor = color.toHexString();
                                        setSecondaryColor(color.toHexString());
                                    }} /></td>
                                <td className='border px-4 py-2'><ColorPicker defaultValue={theme.textColor}
                                    onChange={(color) => {
                                        theme.textColor = color.toHexString();
                                        setTextColor(color.toHexString());
                                    }} /></td>
                                <td className='border px-4 py-2'><ColorPicker defaultValue={theme.headerColor}
                                    onChange={(color) => {
                                        theme.headerColor = color.toHexString();
                                        setHeaderColor(color.toHexString());
                                    }} /></td>
                                <td className='border px-4 py-2'><ColorPicker defaultValue={theme.backgroundColor}
                                    onChange={(color) => {
                                        theme.backgroundColor = color.toHexString();
                                        setBackgroundColor(color.toHexString());
                                    }} /></td>
                                <td className='border px-4 py-2'><ColorPicker defaultValue={theme.buttonColor}
                                    onChange={(color) => {
                                        theme.buttonColor = color.toHexString();
                                        setButtonColor(color.toHexString());
                                    }} /></td>
                                <td className='border px-4 py-2'><ColorPicker defaultValue={theme.buttonHoverColor}
                                    onChange={(color) => {
                                        theme.buttonHoverColor = color.toHexString();
                                        setButtonHoverColor(color.toHexString());
                                    }} /></td>
                                <td className='border px-4 py-2'>
                                    <Button className='mx-1' type="primary"
                                        onClick={() => { updateTheme(theme) }} >Update</Button>
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