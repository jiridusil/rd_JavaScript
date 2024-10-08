/* Vytvořte soubor books.ts, kde vyexportujete typ Book.V souboru main.ts importujte
tento typ a použijte jej pro vytvoření pole knih. */

export type Book = {
    title: string
    pageCount: number
    author: string
}

export default Book;