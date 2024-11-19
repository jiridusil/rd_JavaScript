import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-router-dom';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { ThemePreview } from '../ThemePreview';
import { useState } from 'react';
import { UserDetailModal } from '../UserDetailModal';
import { UserListModal } from '../UserListModal';
import { useTheme } from '../ThemeContext';
import { Options } from '../Types/GeneralTypes';
import { errorAlert, successAlert } from '../Styles/Style';

export const ThemeForm = () => {
    const { theme,
        primaryColor, setPrimaryColor,
        secondaryColor, setSecondaryColor,
        backgroundColor, setBackgroundColor,
        headerColor, setHeaderColor,
        textColor, setTextColor,
        buttonColor, setButtonColor,
        buttonHoverColor, setButtonHoverColor,
        addTheme, setSelectedTheme } = useTheme();
    const [options, setOptions] = useState<Options[]>([]);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!localStorage.getItem('themes')) {
            localStorage.setItem('themes', JSON.stringify([]));
        }
        const themes = JSON.parse(localStorage.getItem('themes')!);

        const name = (event.target as HTMLFormElement).themeName.value

        //alert if name is empty
        if (!name) {
            errorAlert();
            return;
        }
        themes.push({
            themeName: name,
            primaryColor,
            secondaryColor,
            textColor,
            headerColor,
            backgroundColor,
            buttonColor,
            buttonHoverColor
        });

        addTheme({
            themeName: name,
            textColor,
            primaryColor,
            secondaryColor,
            headerColor,
            backgroundColor,
            buttonColor,
            buttonHoverColor
        });

        const themesJson = JSON.stringify(themes);
        localStorage.setItem('themes', themesJson);
        const newThemes = JSON.parse(localStorage.getItem('themes')!);
        console.log('newThemes', newThemes);
        setOptions(newThemes);
        (event.target as HTMLFormElement).reset();
        setSelectedTheme(name);

        //alert success
        successAlert();
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
                                buttonHoverColor={buttonHoverColor}
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
                                    <Label for="buttonHoverColor">
                                        Button hover color
                                    </Label>
                                    <Input
                                        id="buttonHoverColor"
                                        name="buttonHoverColor"
                                        placeholder="color placeholder"
                                        type="color"
                                        value={buttonHoverColor}
                                        onChange={(event) => setButtonHoverColor(event.target.value)}
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