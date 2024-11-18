export type Options = {
    themeName: string
    primaryColor: string
    secondaryColor: string
    textColor: string
    headerColor: string
    backgroundColor: string
    buttonColor: string
    buttonHoverColor: string
}

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
    textColor: string;
    setTextColor: (color: string) => void;
    headerColor: string;
    setHeaderColor: (color: string) => void;
    optionsNew: Options[];
    addTheme: (theme: Options) => void;
}

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