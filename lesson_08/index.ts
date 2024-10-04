const url = 'https://jsonplaceholder.typicode.com/users';

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

const getUsers = async (): Promise<User[]> => {
    let userData: User[] = [];
    try {
        const response = await fetch(url);
        const data: User[] = await response.json();

        userData = data.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            street: user.address?.street,
            suite: user.address?.suite,
            city: user.address?.city,
            ZIPcode: user.address?.zipcode,
            phone: user.phone,
            geoData: `${user.address?.geo.lat}, ${user.address?.geo.lng}`,
            website: user.website,
            companyInfo: `${user.company?.name}, ${user.company?.catchPhrase}, ${user.company?.bs}`,
        }));

    } catch (error) {
        if (error instanceof URIError) {
            console.error('There is a URI Error', error.message);
        } else if (error instanceof SyntaxError) {
            console.error('There is a syntax error in the code', error.message);
        } else if (error instanceof TypeError) {
            console.error('There is a Type Error in the code', error.message);
        } else {
            console.error('Unable to fetch data', (error as any).message);
        }
    }
    return userData;
}
getUsers().then(users => console.table(users));
