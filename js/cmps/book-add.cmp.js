import { bookService } from "../services/book-service.js";

export default {
    template:`
        <section class="book-add">
            <h3>Add book</h3>
            <input type="text" ref="bookNameInput" v-model="searchVal" name="book-name"/>
            <button @click="getBooks">search</button>
            <section class="bood-add-list">
                <ul v-if="booksToShow">
                    <li v-for="book in booksToShow">
                        {{book.title}}
                        <button @click="add(book)">+</button>
                    </li>
                </ul>
            </section>
        </section>    
    `,
    data(){
        return {
            searchVal:'',
            booksToShow:null
        }
    },
    methods:{
        getBooks(){
          bookService.getBooksFromApi(this.searchVal).then((books)=>this.booksToShow = books)
        },
        add(book){
        bookService.addBook(book).then((book)=>this.$emit('returnBook',book))
        }
    },
    computed:{

    },
    created(){
        // console.log(this.booksToShow[0].volumeInfo.title);
    }
}