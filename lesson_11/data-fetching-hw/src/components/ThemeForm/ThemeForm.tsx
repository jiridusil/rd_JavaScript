import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-router-dom';
import { FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { ThemePreview } from '../ThemePreview';
import { useState } from 'react';
import { button } from '../Styles';
import { UserDetailModal } from '../UserDetailModal';
import { UserListModal } from '../UserListModal';
import { useTheme } from '../ThemeContext';

export const ThemeForm = () => {
    const [primaryColor, setPrimaryColor] = useState('#0099ff');
    const [secondaryColor, setSecondaryColor] = useState('#FFA500');
    const [backgroundColor, setBackgroundColor] = useState('#cc8800');
    const [textColor, setTextColor] = useState('#0000cc');
    const [headerColor, setHeaderColor] = useState('#cc0000');
    const [buttonColor, setButtonColor] = useState('#009933');
    const [buttonHoverColor, setButtonHoverColor] = useState('yellow');
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log('primaryColor', primaryColor);
        console.log('secondaryColor', secondaryColor);
        console.log('backgroundColor', backgroundColor);
        console.log('headerColor', headerColor);
        console.log('textColor', textColor);
        console.log('buttonColor', buttonColor);
        console.log('buttonHoverColor', buttonHoverColor);
    }

    return (
        <div className={`d-flex justify-content-center ${theme === 'dark' && 'bg-gray-400'}`}>
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
                                textColor={textColor}
                                backgroundColor={backgroundColor}
                                buttonColor={buttonColor}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td align='center'>
                            <Form onSubmit={handleSubmit} style={{ maxWidth: '500px', width: '100%' }}>
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
                                        placeholder="red"
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
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="previews">
                                        <b>Previews</b>
                                    </Label>
                                    <div>
                                        <UserDetailModal textColor={textColor} backgroundColor={backgroundColor} />
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
                                    <Button color="primary">
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