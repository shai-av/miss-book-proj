import { bookService } from "../services/book-service.js"
import bookFilter from '../cmps/book-filter.cmp.js'
import bookList from '../cmps/book-list.cmp.js'
import bookAdd from "../cmps/book-add.cmp.js";


export default {
    template: `
    <section v-if="books" class="book-app main-layout app-main">
        <book-filter @filtered="setFilter"></book-filter>
        <book-add @returnBook="addToDisplay"/>
        <book-list :books="booksToShow"></book-list>
    </section>
    `,
    components: {
        bookService,
        bookFilter,
        bookList,
        bookAdd
    },
    data() {
        return {
            books: null,
            filterBy: null,
            bookMaxPrice: Infinity
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        setMaxPrice() {
            this.bookMaxPrice = Math.max(...this.books.map(book => book.listPrice.amount))
        },
        removeBook(bookId){
            bookService.remove(bookId).then(()=>console.log('deleted'))
        },
        addToDisplay(book){
            bookService.query().then((books)=>this.books = books)
            // this.books.unshift(book)
        }
        
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            let filteredBooks = this.books.filter((book) => book.title.includes(this.filterBy.name.toLowerCase()));
            return filteredBooks.filter((book) => book.listPrice.amount <= this.filterBy.maxPrice);
        },
    },
    created() {
        bookService.query().then((books)=>this.books = books)
        // this.setMaxPrice()
    },
}