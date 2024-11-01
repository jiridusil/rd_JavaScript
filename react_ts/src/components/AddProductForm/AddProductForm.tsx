import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import { Select } from '../Select';
import { ThemeContext } from '../ThemeContext';
import { useNavigate } from 'react-router-dom';


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

export const AddProductForm = () => {
    const [formData, setFormData] = useState<FormData>(defaultValues);
    const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
    const theme = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        setFormData(defaultValues);
        setFormSubmitting(false);
        navigate('/product-list');
    }

    return (
        <div className={theme === 'light' ? 'bg-white' : 'bg-gray-900'}>
            <div className='container mx-auto max-w-4xl'>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className={`text-base font-semibold leading-7 text-gray-900 ${theme === 'dark' && 'text-white'}`}>Add Product</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600"></p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <Input name='title' handleChange={handleChange} value={formData.title} label='Product Title' placeholder='New Jeans' />
                                </div>
                                <div className="col-span-full">
                                    <TextArea name='description' handleChange={handleChange} value={formData.description} label='Product Description' additionalText='Write a few sentences about the product.' />
                                </div>

                                <div className="col-span-full">
                                    <Input name='price' handleChange={handleChange} value={formData.price} label='Price' placeholder='1.00' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <Select value={formData.category} handleChange={handleChange} options={[
                            { value: 'clothing', label: 'Clothing' },
                            { value: 'electronics', label: 'Electronics' },
                            { value: 'furniture', label: 'Furniture' },
                            { value: 'other', label: 'Other' }
                        ]} name='category' label='Category' />
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
        </div>
    )
}
