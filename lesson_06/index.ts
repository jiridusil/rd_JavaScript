/* Vytvořte funkci getFullName, která jako parametr přijme objekt s povinnými
vlastnostmi firstName(řetězec) a lastName(řetězec).Funkce vrátí řetězec s celým
jménem.Použijte typování pro definování tvaru objektu v parametrech a návratové
hodnoty funkce. */

const getFullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
}

console.log(`Full name is: ${getFullName('Karel', 'Vomacka')}`);


/* Vytvořte rozhraní User s povinnými vlastnostmi id(číslo), name(řetězec), email
    (řetězec).Vytvořte funkci createUser, která přijme povinné parametry pro vytvoření
uživatele a vrátí instanci rozhraní User. */

interface User {
    id: number
    name: string
    email: string
};

const createUser = (id: number, name: string, email: string): User => {
    return { id, name, email }
}
console.log('createUser: ', createUser(1, 'Karel', 'kaja@gott.cz'))

/* Vytvořte třídu UserAccount s vlastnostmi username(řetězec) a isPremiumAccount
    (logická hodnota).Od třídy vytvořte rozhraní UserAccountInterface a exportujte ho. */

class UserAccount implements UserAccountInterface {
    username: string;
    isPremiumAccount: boolean;

    constructor(username: string, isPremiumAccount: boolean) {
        this.username = username;
        this.isPremiumAccount = isPremiumAccount;
    }
}

export interface UserAccountInterface {
    username: string;
    isPremiumAccount: boolean;
}


/* Vytvořte funkci getAdminUser, která nebude mít parametry a vrátí uživatele s
povinnou rolí admin(řetězec).Použijte unii typů pro povolení vracení User nebo
AdminUser. */

type UserType = {
    id: number,
    name: string,
    role: string,
}

type AdminUserType = {
    id: number,
    name: string,
    role: string,
}

const Users = [
    { id: 1, name: 'Karel', role: 'user' },
    { id: 2, name: 'Jiri', role: 'admin' },
]

const getAdminUser = (): UserType | AdminUserType => {
    return Users.find(user => user.role === 'admin') as AdminUserType;
}
console.log('Admin user is: ', getAdminUser());


/* Vytvořte typ Book pro popis knihy, který bude obsahovat vlastnosti title(řetězec),
    pageCount(číslo) a author(řetězec).Vytvořte pole knih s alespoň 5 prvky. */

type Book = {
    title: string
    pageCount: number
    author: string
}

const books: Book[] = [
    { title: 'title1', pageCount: 50, author: 'author1' },
    { title: 'title2', pageCount: 60, author: 'author2' },
    { title: 'title3', pageCount: 70, author: 'author3' },
    { title: 'title4', pageCount: 80, author: 'author4' },
    { title: 'title5', pageCount: 90, author: 'author5' }
];

console.log('books: ', books);

/* Vytvořte soubor books.ts, kde vyexportujete typ Book.V souboru main.ts importujte
tento typ a použijte jej pro vytvoření pole knih. */

