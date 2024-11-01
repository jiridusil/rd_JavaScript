import { useState } from "react";
import { AddProductForm } from "../components/AddProductForm"

export const AddProductPage = () => {
    const [localStorageProducts, setLocalStorageProducts] =
        useState<string>(localStorage.getItem('products') || '[]');

    return <AddProductForm />
}