import { useState } from "react";
import { UserList } from "../../components/UserList";

export const UserListPage = () => {
    const [localStorageProducts, setLocalStorageProducts] =
        useState<string>(localStorage.getItem('products') || '[]');
    return (
        <UserList />
    )
}