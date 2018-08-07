<template>
  <div id="about">
    <h2><a href="http://ahmadfathy.bitballoon.com" target="_blank">{{name.split('').reverse().join('')}}</a></h2>
    <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        name: 'yhtaF damhA'
      }
    }
  }
</script>
<style>
  #about{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: #fff;
  }
  h2{
    margin: 30px;
  }
  h2 a{
    color: #007;
  }
  p{text-align: center;}
</style>
