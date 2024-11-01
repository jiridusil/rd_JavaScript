import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";

const url = 'https://fakestoreapi.com/products';

type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    raging: {
        rate: number,
        count: number
    }
}



export const ProductList = () => {
    const [products, setProducts] = useState<Product[]>();
    const theme = useContext(ThemeContext);

    console.log(theme);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data: Product[] = await response.json();
            const localStorageProducts = localStorage.getItem('products') || '[]';

            setProducts([...data, ...JSON.parse(localStorageProducts)]);
        }
        fetchData();
    }, []);

    return (
        <div className={theme === 'light' ? 'bg-white' : 'bg-gray-900'}>
            < div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8" >
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product List</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products?.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 transition duration-150 ease-in-out lg:h-80">
                                <img
                                    alt={product.title}
                                    src={product.image}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={`/product/${product.id}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.title}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{
                                    new Intl.NumberFormat('cs-CZ', {
                                        style: 'currency', currency: 'CZK'
                                    }).format(
                                        product.price,
                                    )}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </div >

    )
}