<template>
  <div id="form">
    <form @submit.prevent="addArticle()" v-show="!posted">
      <h2>Add article</h2>
      <label>Title</label>
      <input type="text" v-model="article.title" required/>
      <label>Subject</label>
      <textarea v-model="article.body" required></textarea>
      <label>Author</label>
      <input type="text" v-model="article.author" required/>
      <label>Favorit</label>
      <div>
        <input type="checkbox" v-model="article.id" value="one"/>
        <span>one</span>
        <input type="checkbox" v-model="article.id" value="two"/>
        <span>two</span>
        <input type="checkbox" v-model="article.id" value="three"/>
        <span>three</span>
      </div>
      <input type="submit" value="post"/>
    </form>
    <div v-show="posted" id="posted">thanks...</div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      article:{
        title:'',
        body:'',
        author:'',
        id:[]
      },
      posted: false
    }
  },
  methods:{
    addArticle() {
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        title: this.article.title,
        body: this.article.body,
        author: this.article.author,
        id: this.article.id

      }).then((data)=>{
        this.posted = true;
        console.log(data);
      })
    }
  }
}
</script>
<style scoped>
#form{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form{
  display: flex;
  min-height: 300px;
  justify-content: center;;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 5px #000;
  width:800px;
  margin: 10px;
  padding: 20px;
}
form > input{
  width: 100%;
  padding: 5px;
  margin: 5px 5px 5px 0;
}
form label{
  width: 100%;
  display: block;
  text-align: left;
}
form textarea{
  width:100%;
  height: 200px;
  resize: none;
}
form input[type="submit"]{
  background: #000;
  border: 1px solid #fff;
  outline: 0;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  font-size: 22px;
  padding: 10px;
}
form div{
  width: 100%;
  border: 1px solid #fff;
  padding: 10px;
}
#posted{
  color: #fff;
  font-size: 70px;
}
</style>
