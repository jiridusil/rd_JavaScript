import { useState } from "react";
import { ProductList } from "../components/ProductList"

export const ProductListPage = () => {
    const [localStorageProducts, setLocalStorageProducts] =
        useState<string>(localStorage.getItem('products') || '[]');
    return (
        <ProductList localStorageProducts={localStorageProducts} />
    )
}