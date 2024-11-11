import { Link } from "react-router-dom";

export const Homepage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: '24px' }}>Welcome to Home Page.</div>
            <p>Use the menu bar on top to select prefered option.</p>
        </div>
    )
};