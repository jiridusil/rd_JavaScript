import { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import { Link } from "react-router-dom";
import { User } from "../Types/GeneralTypes";

export const UserList = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [users, setUsers] = useState<User[]>();
    const [error, setError] = useState<string | null>();
    const [loading, setLoading] = useState<boolean>();
    const { theme, textColor, backgroundColor, headerColor } = useTheme();

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
            setUsers(data);
        };
        fetchData();
    }, [url]);


    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>Načítání...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className='flex flex-direction-column justify-center items-center min-h-screen'
            style={{ background: backgroundColor }
            }>
            <ul role="list" className="divide-y divide-gray-500">
                <h2 className="text-2xl font-semibold leading-6 mb-4"
                    style={{ color: headerColor }}>List of users</h2>
                {users?.map((user) => (
                    <li key={user.email} className="flex justify-between gap-x-6 py-4">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <Link to={`/user/${user.id}`} style={{ color: textColor }}>
                                    <p className={`text-s font-semibold leading-6 text-gray-900" ${theme === 'dark' && 'text-gray-200'}`}>{user.name}</p>
                                </Link>
                                <p className="mt-1 truncate text-s leading-5" style={{ color: textColor }}>Email: {user.email}</p>
                                <p className="mt-1 truncate text-s leading-5" style={{ color: textColor }}>Company: {user.company?.name}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div >

    )
};