<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
    <newfooter></newfooter>
    <div class="loading" v-show="loaded">Loading</div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Body from './components/Body.vue';
  import addArticle from './components/addArticle.vue';
  import About from './components/about.vue';
  import Footer from './components/Footer.vue';

   export default {
     components: {
       'navbar': Header,
       'newfooter': Footer,
     },
      data () {
       return {
         loaded: false
       }
     },
     created(){

       this.$http.get('https://jsonplaceholder.typicode.com/users').then((data)=>{
         this.users = data.body;
       });
     },
     mounted(){
       loaded:true;
     }
     /*
     methods: {
       hi(){
         return 'hi ' + this.name;
       },
       changesome(d){
         this.name = d;
       }
     },*/
   }
</script>

<style>
  *{margin: 0;padding: 0;box-sizing: border-box;}
  body{background: #008088}
  h1{text-align: center;}
  .loading{
    width: 100%;
    height: 100%;
    background: #ff0;
    position: fixed;
    top: 0;left: 0;
    z-index: 66666;
  }
</style>
