import { useState } from "react";
import { ProductList } from "../components/ProductList"

export const ProductListPage = () => {
    const [localStorageProducts, setLocalStorageProducts] =
        useState<string>(localStorage.getItem('products') || '[]');
    const array = [1, 2, 3, 4, 5];

    return (
        <>
            <ProductList />
            {array.map((value) => (
                <button key={value}>{value}</button>
            ))}
        </>
    )
}