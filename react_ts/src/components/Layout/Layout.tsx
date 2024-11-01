import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = () => {
    const navigation = useNavigation
    return (
        <>
            <Header />
            <main style={{ minHeight: 'calc(100vh - 117px)', padding: '32px 0' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
};