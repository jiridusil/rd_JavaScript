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
    const { theme, toggleTheme, textColor, backgroundColor, headerColor } = useTheme();

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

    // useEffect(() => {
    //     console.log('theme3: ', theme);
    //     console.log('backgroundColor3: ', backgroundColor);
    //     console.log('textColor3: ', textColor);
    // }, [theme, backgroundColor, textColor]);

    return (
        <div className={'flex flex-direction-column justify-center min-h-screen'}
            style={{ background: backgroundColor }}>
            <ul role="list" className="divide-y divide-gray-500">
                <h2 className="text-2xl font-semibold leading-6 mb-4" style={{ color: headerColor }}>User Detail</h2>
                <li key={user?.email} className="flex justify-between gap-x-6 py-4">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className={"text-s font-semibold leading-6"} style={{ color: textColor }}>{user?.name}</p>
                            <p className="mt-1 truncate text-s leading-5" style={{ color: textColor }}>Email: {user?.email}</p>
                            <p className="mt-1 truncate text-s leading-5" style={{ color: textColor }}
                            >Company: {user?.company?.name}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}   