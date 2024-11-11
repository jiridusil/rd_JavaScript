import { Button, FormGroup, Label } from "reactstrap"
import { button } from "../Styles"

type Props = {
    user: any;
}

export const UserModal = ({ user }: Props) => {

    return (
        <FormGroup>
            <Label for="previews">
                <b>Previews</b>
            </Label>
            <div>
                <Button style={button}>Preview User</Button>
                <Button style={button}>Preview User</Button>
            </div>
        </FormGroup>
    )
}