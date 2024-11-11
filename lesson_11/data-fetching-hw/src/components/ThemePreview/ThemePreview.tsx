import { Container } from "reactstrap";

type Props = {
    headerColor: string;
    textColor: string;
    backgroundColor: string;
    buttonColor: string;
}

export const ThemePreview = ({ headerColor, textColor, backgroundColor, buttonColor }: Props) => {
    return (
        <Container style={{ backgroundColor: backgroundColor }} >
            <div style={{ marginBottom: '10px' }}>
                <h1 style={{ color: headerColor }}>Nadpis H1</h1>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <p style={{ color: textColor }}><b>Odstavec textu</b></p>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <button className="btn" style={{ background: buttonColor }}>Primary Button</button>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <button className="btn" style={{ background: buttonColor }}>Secondary Button</button>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <hr className="m-6" />
            </div>
        </Container>
    )
}