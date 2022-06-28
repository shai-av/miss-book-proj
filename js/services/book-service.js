import { utilService } from './util-service.js'
import booksJson from './books-json.js'
import { storageService } from './async-storage-service.js';

export const bookService = {
    query,
    remove,
    save,
    get,
    getPrevNextBookId
};

const BOOKS_KEY = 'booksDB';

if (!utilService.loadFromStorage(BOOKS_KEY)) utilService.saveToStorage(BOOKS_KEY, booksJson)

function query() {
    return storageService.query(BOOKS_KEY)
}

function remove(bookId) {
    return storageService.remove(BOOKS_KEY, bookId)
}
function save(book) {
    return storageService.put(BOOKS_KEY, book)
}
function get(bookId) {
    return storageService.get(BOOKS_KEY, bookId)
}

function getPrevNextBookId(bookId){
        return storageService.query(BOOKS_KEY)
            .then(books => {
                const idx = books.findIndex(book => book.id === bookId)
                return {
                    next:(idx < books.length-1)? books[idx + 1].id : books[0].id,
                    prev:(idx !== 0)? books[idx - 1].id : books[books.length-1].id}
            })
}







