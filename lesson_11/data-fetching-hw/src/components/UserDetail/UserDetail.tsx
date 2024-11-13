import { useEffect, useState } from "react";
import { Link, Params, useLoaderData } from "react-router-dom";
import { useTheme } from "../ThemeContext";

export const userDetailLoader = async ({ params }: { params: Params }) => {
    return { id: params.id };
}

type User = {
    id: number
    name: string
    username: string
    email: string
    address?: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company?: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export const UserDetail = () => {
    const { id } = useLoaderData() as Params;
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const [user, setUser] = useState<User>();
    const [error, setError] = useState<string | null>();
    const [loading, setLoading] = useState<boolean>();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
                setError('Data se nepodařilo načíst');
                setLoading(false);
                return;
            }
            const data = await response.json();
            setError(null);
            setLoading(false);
            setUser(data);
        };
        fetchData();
    }, [url]);

    return (
        <div className={`flex flex-direction-column justify-center items-center min-h-screen ${theme === 'dark' && 'bg-gray-900'}`}>
            <ul role="list" className="divide-y divide-gray-500">
                <li key={user?.email} className="flex justify-between gap-x-6 py-4">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <Link to={`/user/${user?.id}`}>
                                <p className={`text-sm font-semibold leading-6 text-gray-900" ${theme === 'dark' && 'text-gray-200'}`}>{user?.name}</p>
                            </Link>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Email: {user?.email}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Company: {user?.company?.name}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}   