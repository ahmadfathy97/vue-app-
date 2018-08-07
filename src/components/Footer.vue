<template>
  <footer>
    <p>All rights reserved &copy; {{year}}</p>
  </footer>
</template>

<script>
   export default {
      data () {
       return {
         year: 2018
       }
     }
   }
</script>

 <style scoped>
 footer{
   position: relative;
   bottom: 0;
   background: #222;
 }
 footer p{
   text-align: center;;
   color: #fff;
   font-size: 20px;
   padding: 5px;
 }
</style>
