import { eventBus } from "../services/eventBus-service.js";

export default {
    template: `
 <section class="about-page app-main flex justify-center align-center">
    
    <div class="about-msg">
    <p>About us..</p>

    <p><h3>WHO WE ARE</h3>
MissBook Books is an independent bookseller serving Portland, Oregon, since 1971. Through MissBook.com and our expansive online community, we also reach readers around the world, people who are as excited about books as we are.
We are grounded by our company's core values, which have guided us through the ups and downs of the bookselling industry. Each and every employee's love of books drives us forward.
We look forward to a future filled with many new opportunities, new innovations, and, of course, new books!
</p>


<p><h3>MISSION</h3>
Our mission is to be the world's best destination for readers, a place that fosters a culture of reading and connects people with the books they'll love.
</p>

<p><h3>VALUES</h3>
We love everything about books. As entertainment, as tools of discovery, and as timeless works of art, we believe books have the unique ability to transport us and transform our world view.
We're conversation starters. We're an eclectic team of readers with broad interests and strong feelings about the books on our shelves. And we're committed to sharing our knowledge and enthusiasm with our customers every day.
We're nothing without our customers. MissBook would not be the destination it is now without its loyal customers.
We recognize that every reader is different. We know readers are as unique and complex as the books we sell. We, in turn, make every effort to engage with our customers, respond to their needs, and learn from their feedback.
We're creative and resourceful. We built our name on innovative bookselling, and we continue to evolve by remaining curious and inventive.
We support readers and writers. Through literary events, original content, and a vibrant online community, we're dedicated to promoting great authors and their books, literacy, and freedom of expression.
We exchange ideas. We all play a role in MissBook success, and it's the sharing of our unique perspectives that generates exceptional ideas.
</p>
    </div>
 </section>
`,
    data() {
        return {
            interval:null
        };
    },
    created() { },
    methods: {

    },
    computed: {},
    created() {
       this.interval = setInterval(() => console.log('int'),1000*5)
     },
     unmounted(){
        clearInterval(this.interval)
     }
};