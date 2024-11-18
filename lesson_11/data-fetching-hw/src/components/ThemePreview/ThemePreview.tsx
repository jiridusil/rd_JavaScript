import { Button, Container } from "reactstrap";
import { useTheme } from "../ThemeContext";

type Props = {
    primaryColor: string;
    secondaryColor: string;
    headerColor: string;
    backgroundColor: string;
    buttonColor: string;
    buttonHoverColor: string;
}

export const ThemePreview = ({ primaryColor, secondaryColor, headerColor, buttonColor, buttonHoverColor }: Props) => {
    const { textColor, backgroundColor } = useTheme();

    const table = { margin: '20px', }
    const primaryButton = {
        margin: '10px',
        backgroundColor: primaryColor,
    }
    const secondaryButton = {
        margin: '10px',
        backgroundColor: secondaryColor,
    }


    return (
        <>
            <table style={table}>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ color: textColor, textAlign: 'center' }}>
                            <h3>List of elements for primary color</h3>
                            <hr />
                            <ul style={{ color: primaryColor }}>
                                <li><h3>Primary Header</h3></li>
                                <li>Text</li>
                            </ul>
                            <Button style={primaryButton}>Submit</Button>
                            <Button style={primaryButton}>Cancel</Button>
                        </td>
                        <td>
                            <Container style={{ backgroundColor: backgroundColor, minWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                                <div style={{ marginBottom: '10px' }}>
                                    <h1 style={{ color: headerColor }}>Nadpis H1</h1>
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <p style={{ color: textColor }}><b>Odstavec textu</b></p>
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <button
                                        className="btn"
                                        style={{ background: buttonColor }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = buttonHoverColor}
                                        onMouseLeave={(e) => e.currentTarget.style.background = buttonColor}
                                    >
                                        Primary Button
                                    </button>
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <button className="btn" style={{ background: buttonColor }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = buttonHoverColor}
                                        onMouseLeave={(e) => e.currentTarget.style.background = buttonColor}
                                    >Secondary Button</button>
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <hr className="m-6" />
                                </div>
                            </Container>
                        </td>

                        <td style={{ color: textColor, textAlign: 'center' }}>
                            <h3>List of elements for secondary color</h3>
                            <hr />
                            <ul style={{ color: secondaryColor }}>
                                <li><h3>Secondary Header</h3></li>
                                <li>Text</li>
                            </ul>
                            <Button style={secondaryButton}>Submit</Button>
                            <Button style={secondaryButton}>Cancel</Button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table >
        </>
    )
}