<template>
  <ul>
    <li v-for="link in links"><router-link :to="link.url">{{link.name}}</router-link></li>
  </ul>
</template>

<script>
   export default {
      data () {
       return {
         links: [
           {name:'Home',url:'/'},
           {name:'Add',url:'/add'},
           {name:'About',url:'/about'}
        ]
       }
     }
   }
</script>

 <style scoped>
 ul{
   background: #222;
   text-align: center;
 }
 ul li{
   list-style-type: none;
   display: inline-block;
 }
 ul li a {
   display: block;
   width: 100%;
   height: 100%;
   padding: 10px 50px;
   font-size: 20px;
   text-decoration: none;
   color: #aaa;
 }
 ul li a:hover {
   color: #fff;
   background: #888
 }
 .router-link-exact-active{
   color: #fff;
   background: #888
 }
</style>
