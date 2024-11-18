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

export const themeDefaults = {
    lightColor: '#F9FAFB',
    darkColor: '#111827'
}


export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
    primaryColor: string;
    setPrimaryColor: (color: string) => void;
    secondaryColor: string;
    setSecondaryColor: (color: string) => void;
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
    headerColor: string;
    setHeaderColor: (color: string) => void;
    textColor: string;
    setTextColor: (color: string) => void;
    buttonColor: string;
    setButtonColor: (color: string) => void;
    buttonHoverColor: string;
    setButtonHoverColor: (color: string) => void;
    optionsNew: Options[];
    addTheme: (theme: Options) => void;
    selectedTheme: string;
    setSelectedTheme: (themeName: string) => void;
}

export const defaultThemeContext: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => { },
    primaryColor: '#0099ff', // default value for primary color
    setPrimaryColor: () => { },
    secondaryColor: '#FFA500', // default value for secondary color
    setSecondaryColor: () => { },
    backgroundColor: '#ffffff', // default value for background color
    setBackgroundColor: () => { },
    headerColor: '#CC0000', // default value for header color
    setHeaderColor: () => { },
    textColor: '#111827', // default value for text color
    setTextColor: () => { },
    buttonColor: '#009933', // default value for button color
    setButtonColor: () => { },
    buttonHoverColor: '#a4f482', // default value for button hover color
    setButtonHoverColor: () => { },
    optionsNew: [],
    addTheme: () => { },
    selectedTheme: 'Themes',
    setSelectedTheme: () => { }
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