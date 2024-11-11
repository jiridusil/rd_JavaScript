import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../Header";

export const Layout = () => {
    const navigation = useNavigation
    return (
        <>
            <Header />
            <main style={{ minHeight: 'calc(100vh - 117px)', padding: '32px 0' }}>
                <Outlet />
            </main>
        </>
    )
};