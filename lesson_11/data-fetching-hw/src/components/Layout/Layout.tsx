import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../Header";
import { useTheme } from "../ThemeContext";

export const Layout = () => {
    const navigation = useNavigation;
    const { backgroundColor } = useTheme();

    return (
        <>
            <Header />
            <main style={{ background: backgroundColor, minHeight: 'calc(100vh - 117px)', padding: '32px 0' }}>
                <Outlet />
            </main>
        </>
    )
};