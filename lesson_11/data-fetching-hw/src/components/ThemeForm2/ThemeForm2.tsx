import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-router-dom';
import { FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { ThemePreview } from '../ThemePreview';
import { useState } from 'react';


export const ThemeForm2 = () => {
    const [primaryColor, setPrimaryColor] = useState('black');
    const [secondaryColor, setSecondaryColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [textColor, setTextColor] = useState('blue');
    const [headerColor, setHeaderColor] = useState('red');
    const [buttonColor, setButtonColor] = useState('green');
    const [buttonHoverColor, setButtonHoverColor] = useState('yellow');


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
        <div className="d-flex justify-content-center" style={{ backgroundColor: 'lightsalmon' }}>

            <Form onSubmit={handleSubmit} style={{ maxWidth: '500px', width: '100%' }}>
                <ThemePreview
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    headerColor={headerColor}
                    textColor={textColor}
                    backgroundColor={backgroundColor}
                    buttonColor={buttonColor}
                />
                <FormGroup>
                    <Label for="primaryColor">
                        Primary Color
                    </Label>
                    <Input
                        id="primaryColor"
                        name="primaryColor"
                        placeholder="color placeholder"
                        type="color"
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
                        onChange={(event) => setButtonColor(event.target.value)}
                    />
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
        </div>
    )
}