<template>
  <div>
    <input placeholder="Search" type="search" v-model="search"/>
    <section class="articles">
      <div v-for="article in sfilter">
        <router-link :to="'/article/' + article.id">
          <h2 v-colorful="'withBG'">{{article.title}}</h2>
          <p>{{article.body}}</p>
          </router-link>
        </div>
    </section>
  </div>
</template>

<script>
import article from './article.vue';
export default {
  data(){
    return{
      search:'',
      articles: []
    }
  },
  directives:{
    colorful:{
      bind(el, binding, nodev){
        el.style.color = '#' + Math.random().toString().slice(2,8);
        if(binding.value === 'withBG') {
          //el.style.background = 'rgba(' + Math.random().toString().slice(2,4) + ',' + Math.random().toString().slice(2,4) + ',' + Math.random().toString().slice(2,4) + ', 0.5)';
          el.style.background = '#fff';
        }
      }
    }
  },
  filters:{
    myfilter(value){
      if(typeof(value === 'string')) return value.toUpperCase();
    }
  },
  computed:{
    sfilter(){
      return this.articles.filter((article)=>{
        return article.title.match(this.search);
      });
    }
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
      this.articles = data.body.slice(0,20);
    });
  }
  /*props: ['users'],
  props:{
    articles:{
    type: Array,
    required: true
  }
  },
  methods:{
    change(){
      this.$emit('test', 'test11');
    }
  },*/
}
</script>
<style scoped>
input{
  display: block;
  margin: 5px auto;
  padding: 5px;
}
.articles{
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.articles div {
  width: 80%;
  margin: 5px;
  padding: 10px;
  text-align: center;
  background: #e4e4e4;
  border:1px solid #000;
  cursor: pointer;
}
.articles div:hover{
  background: #cfcfcf;
}
.articles div h2{
  font-size: 30px;
}
.articles div p{
  font-size: 22px;
  color: #000;
  margin: 20px;
}
a{
  text-decoration: none;
}
</style>
