import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


type FormData = {
    title: string,
    description: string,
    price: string,
    category: string,
    image: string
}

const defaultValues: FormData = {
    title: '',
    description: '',
    price: '',
    category: '',
    image: ''
};

type Props = {
    updateProducts: React.Dispatch<React.SetStateAction<string>>
}

export const AddProduct = ({ updateProducts }: Props) => {
    const [formData, setFormData] = useState<FormData>(defaultValues);
    const [formSubmitting, setFormSubmitting] = useState<boolean>(false);

    const handleChange: React.ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit: React.FormEventHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitting(true);
        console.log(formData);
        if (!localStorage.getItem('products')) {
            localStorage.setItem('products', JSON.stringify([]));
        }

        const products = JSON.parse(localStorage.getItem('products')!);
        products.push({
            ...formData,
            id: uuidv4(),
            image: 'https://prd.place/400'
        });

        const productsJson = JSON.stringify(products);
        localStorage.setItem('products', productsJson);
        updateProducts(productsJson);
        setFormData(defaultValues);
        setFormSubmitting(false);
    }

    return (
        <div className='container mx-auto max-w-4xl'>
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Add Product</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600"></p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Product Title
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            id="title"
                                            name="title"
                                            type="text"
                                            placeholder="New Jeans"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            value={formData.title}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="productDescription" className="block text-sm font-medium leading-6 text-gray-900">
                                    Product Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={formData.description}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about the product.</p>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                    Price
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-sm">
                                        <input
                                            id="price"
                                            name="price"
                                            type="text"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            value={formData.price}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about the product.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="productCategory" className="block text-sm font-medium leading-6 text-gray-900">
                        Category
                    </label>
                    {/* <div className="mt-2"> */}
                    <select
                        id="category"
                        name="category"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="">Select a category</option>
                        <option value="men's clothing">Men's clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                    </select>
                    {/* </div> */}
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900 disabled:opacity-75 disabled:cursor-progress"
                        disabled={formSubmitting}>
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-75 disabled:cursor-progress"
                        disabled={formSubmitting}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}
