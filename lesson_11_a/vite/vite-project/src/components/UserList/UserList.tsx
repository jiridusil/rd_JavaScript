import { useEffect, useState } from "react";

/*  
Cíl: Vytvořit React komponentu, která načítá a zobrazuje seznam uživatelů z API
pomocí hooku useEffect.

● Nastavení projektu:
    ○ Vytvořte nový React projekt pomocí Create React App:
        npx create - react - app data - fetching - hw--template typescript
    ○ Přejděte do nově vytvořené složky:
        cd data - fetching - hw
● Vytvoření komponenty:
    ○ V src / components složce vytvořte nový soubor s názvem UserList.tsx
    ○ V tomto souboru vytvořte funkční komponentu UserList
    ○ Nezapomeňte vytvořit barrel file index.ts, abychom neměli nehezké importy
● Pomocí useEffect a useState načtěte seznam uživatelů z mockAPI
    ○ https://jsonplaceholder.typicode.com/users
● Renderování komponenty:
    ○ Zobrazte zprávu "Načítání..." když se data načítají(použijte state)
    ○ Po načtení dat zobrazte seznam jmen uživatelů
    ○ Pro každého uživatele zobrazte jméno, email a název společnosti
● Nezapomeňte komponentu vyrenderovat v App
● Implementujte zachycení a zobrazení chyb:
    ○ Přidejte nový state pro ukládání chybových zpráv
    ○ Zobrazte chybovou zprávu uživateli, pokud načtení dat selže
*/

const url = 'https://jsonplaceholder.typicode.com/users';

export type User = {
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

export const UserList = () => {
    const [users, setUsers] = useState<User[]>();
    const [error, setError] = useState<string>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            if (!response.ok) {
                setError('Data se nepodařilo načíst');
                return;
            }
            const data = await response.json();
            setUsers(data);
        };
        fetchData();
    }, []);

    if (error) {
        return (
            <div>
                <p>{error}</p>
            </div>
        );
    }

    if (!users) {
        return <p>Načítání...</p>;
    }
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {users?.map((user) => (
                <li key={user.email} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{user.name}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Email: {user.email}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Company: {user.company?.name}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
};