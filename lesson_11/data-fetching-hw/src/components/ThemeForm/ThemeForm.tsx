import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-router-dom';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { ThemePreview } from '../ThemePreview';
import { useState } from 'react';
import { UserDetailModal } from '../UserDetailModal';
import { UserListModal } from '../UserListModal';
import { useTheme } from '../ThemeContext';

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

export const ThemeForm = () => {
    const { theme, textColor, setTextColor, backgroundColor, setBackgroundColor
        , headerColor, setHeaderColor } = useTheme();
    const [primaryColor, setPrimaryColor] = useState('#0099ff');
    const [secondaryColor, setSecondaryColor] = useState('#FFA500');
    const [buttonColor, setButtonColor] = useState('#009933');
    const [buttonHoverColor, setButtonHoverColor] = useState('yellow');
    const [selectedColor, setSelectedTheme] = useState<string>('Theme');
    const [options, setOptions] = useState<Options[]>([]);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!localStorage.getItem('themes')) {
            localStorage.setItem('themes', JSON.stringify([]));
        }
        const themes = JSON.parse(localStorage.getItem('themes')!);
        const name = (event.target as HTMLFormElement).themeName.value
        if (!name) {
            const alertBox = document.createElement('div');
            alertBox.textContent = 'Please type a name for your theme';
            alertBox.style.position = 'fixed';
            alertBox.style.bottom = '20px';
            alertBox.style.right = '20px';
            alertBox.style.backgroundColor = '#dc3545';
            alertBox.style.color = 'white';
            alertBox.style.padding = '10px';
            alertBox.style.borderRadius = '5px';
            document.body.appendChild(alertBox);
            setTimeout(() => {
                document.body.removeChild(alertBox);
            }, 3000);
            return;
        }
        themes.push({
            themeName: name,
            primaryColor,
            secondaryColor,
            headerColor,
            backgroundColor,
            buttonColor,
            buttonHoverColor
        });
        const themesJson = JSON.stringify(themes);
        localStorage.setItem('themes', themesJson);
        (event.target as HTMLFormElement).reset();
        setOptions(name);
        setSelectedTheme(name);
        const alertBox = document.createElement('div');
        alertBox.textContent = 'New theme has been saved successfully!';
        alertBox.style.position = 'fixed';
        alertBox.style.bottom = '20px';
        alertBox.style.right = '20px';
        alertBox.style.backgroundColor = '#28a745';
        alertBox.style.color = 'white';
        alertBox.style.padding = '10px';
        alertBox.style.borderRadius = '5px';
        document.body.appendChild(alertBox);
        setTimeout(() => {
            document.body.removeChild(alertBox);
        }, 3000);
    }

    return (
        <div className={`d-flex justify-content-center ${theme === 'dark' && {}}`}>
            <table>
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ThemePreview
                                primaryColor={primaryColor}
                                secondaryColor={secondaryColor}
                                headerColor={headerColor}
                                backgroundColor={backgroundColor}
                                buttonColor={buttonColor}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td align='center'>
                            <Form onSubmit={handleSubmit} style={{ color: textColor, background: backgroundColor, maxWidth: '500px', width: '100%' }}>
                                <FormGroup>
                                    <Label for="primaryColor">
                                        Primary Color
                                    </Label>
                                    <Input
                                        id="primaryColor"
                                        name="primaryColor"
                                        placeholder="color placeholder"
                                        type="color"
                                        value={primaryColor}
                                        onChange={(event) => setPrimaryColor(event.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="secondaryColor">
                                        Secondary color
                                    </Label>
                                    <Input
                                        id="secondaryColor"
                                        name="secondaryColor"
                                        placeholder="color placeholder"
                                        type="color"
                                        value={secondaryColor}
                                        onChange={(event) => setSecondaryColor(event.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="backgroundColor">
                                        Background color
                                    </Label>
                                    <Input
                                        id="backgroundColor"
                                        name="backgroundColor"
                                        placeholder="color placeholder"
                                        type="color"
                                        value={backgroundColor}
                                        onChange={(event) => setBackgroundColor(event.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="headerColor">
                                        Header color
                                    </Label>
                                    <Input
                                        id="headerColor"
                                        name="headerColor"
                                        placeholder="color placeholder"
                                        type="color"
                                        value={headerColor}
                                        onChange={(event) => setHeaderColor(event.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="textColor">
                                        Text color
                                    </Label>
                                    <Input
                                        id="textColor"
                                        name="textColor"
                                        placeholder="color placeholder"
                                        type="color"
                                        value={textColor}
                                        onChange={(event) => setTextColor(event.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="buttonColor">
                                        Button color
                                    </Label>
                                    <Input
                                        id="buttonColor"
                                        name="buttonColor"
                                        placeholder="color placeholder"
                                        type="color"
                                        value={buttonColor}
                                        onChange={(event) => setButtonColor(event.target.value)}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="previews">
                                        <b>Previews</b>
                                    </Label>
                                    <div>
                                        <UserDetailModal />
                                        <UserListModal />
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="themeName">
                                        Theme name
                                    </Label>
                                    <Input id="themeName"
                                        name="themeName"
                                        placeholder="type a name of your theme"
                                        type="text"
                                    />
                                </FormGroup>
                                <div className="d-flex justify-content-end">
                                    <Button color="primary" type="submit" >
                                        Save
                                    </Button>
                                </div>
                            </Form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}