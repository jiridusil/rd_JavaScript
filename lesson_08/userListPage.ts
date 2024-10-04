import * as path from 'path';
import * as fs from 'fs';

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
    let data: User[] = [];
    try {
        const response = await fetch(url);
        data = await response.json();

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

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>User Data</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                }
                th {
                    background-color: #eee38c;
                }
                tr:nth-child(even) {
                    background-color: #e2e2e2;
                }
            </style>
        </head>
        <body>
            <h1>User Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Street</th>
                        <th>Suite</th>
                        <th>City</th>
                        <th>ZIP Code</th>
                        <th>Phone</th>
                        <th>Geo Data</th>
                        <th>Website</th>
                        <th>Company Info</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map(user => `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.username}</td>
                            <td>${user.email}</td>
                            <td>${user.address?.street}</td>
                            <td>${user.address?.suite}</td>
                            <td>${user.address?.city}</td>
                            <td>${user.address?.zipcode}</td>
                            <td>${user.phone}</td>
                            <td>${user.address?.geo.lat}, ${user.address?.geo.lng}</td>
                            <td>${user.website}</td>
                            <td>${user.company?.name}, ${user.company?.catchPhrase}, ${user.company?.bs}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </body>
        </html>
    `;

    // Write HTML content to a file
    const htmlFilePath = path.resolve(__dirname, '../userListPage.html');
    fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');

    console.log('User Data page generated successfully:', htmlFilePath);

    return userData;

}




getUsers().then(users => console.table(users));
