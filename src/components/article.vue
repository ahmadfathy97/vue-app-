<template>
  <div class="article">
    <h2>{{article.title}}</h2>
    <p>{{article.body}} {{article.body}} {{article.body}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id: this.$route.params.id,
      article:{}
    }
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then((article)=>{
      this.article = article.body;
    })
  }
}
</script>
<style scoped>
.article{
  min-height: 100vh;
  display: flex;align-items: center;justify-content: center;flex-direction: column;
}
.article h2{
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  margin: 20px;
  text-align: center;
}
.article p {
  color: #ddd;
  font-size: 40px;
  text-align: center;
}
</style>
