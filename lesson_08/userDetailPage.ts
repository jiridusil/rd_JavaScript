import { User } from './userListPage';
import { url } from './userListPage';

const fs = require('fs');
const path = require('path');

const getUsers = async (): Promise<User[]> => {
    const response = await fetch(url);
    const data: User[] = await response.json();
    return data;
}

const generateUserDetailPage = async (userId: number) => {
    const users: User[] = await getUsers();
    const user = users.find(user => user.id === userId);

    if (!user) {
        console.error('User not found');
        return;
    }

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>User Detail</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                .user-detail {
                    border: 1px solid #ddd;
                    padding: 20px;
                    border-radius: 4px;
                    max-width: 600px;
                    margin: auto;
                }
                .user-detail h1 {
                    font-size: 24px;
                    margin-bottom: 20px;
                }
                .user-detail p {
                    margin: 5px 0;
                }
            </style>
        </head>
        <body>
            <div class="user-detail">
                <h1>User Detail</h1>
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${user.address?.street ?? 'N/A'}, ${user.address?.suite ?? 'N/A'}, ${user.address?.city ?? 'N/A'}, ${user.address?.zipcode ?? 'N/A'}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> ${user.website}</p>
                <p><strong>Company:</strong> ${user.company?.name}, ${user.company?.catchPhrase}, ${user.company?.bs}</p>
            </div>
        </body>
        </html>
    `;

    // Write HTML content to a file
    const htmlFilePath = path.resolve(__dirname, `../user${userId}Detail.html`);
    fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');

    console.log('User Detail page generated successfully:', htmlFilePath);
}

//Generate user detail page for each user
for (let i = 1; i <= 10; i++) {
    generateUserDetailPage(i);
};