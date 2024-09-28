import { Book } from './books'

/* Vytvořte soubor books.ts, kde vyexportujete typ Book.V souboru main.ts importujte
tento typ a použijte jej pro vytvoření pole knih. */

const books: Book[] = [
    { title: 'title6', pageCount: 50, author: 'author6' },
    { title: 'title7', pageCount: 60, author: 'author7' },
    { title: 'title8', pageCount: 70, author: 'author8' },
    { title: 'title9', pageCount: 80, author: 'author9' },
    { title: 'title10', pageCount: 90, author: 'author10' }
];

console.log('books imported: ', books);