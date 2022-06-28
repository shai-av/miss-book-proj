export default {
  template: `
 <section class="book-filter">
    <input type="text" v-model="filterBy.name" @input="filter"/>
    <input type="range" min="0" max="200"
       :title=getRangeTitle v-model="filterBy.maxPrice"  @change="filter"/>
 </section>
`,
  data() {
    return {
      filterBy: {
        name: "",
        maxPrice:200
      },
    };
  },
  methods: {
    filter() {
      this.$emit("filtered", this.filterBy);
    },
  },
  computed: {
    getRangeTitle(){
      return this.filterBy.maxPrice
    }
  },
};
