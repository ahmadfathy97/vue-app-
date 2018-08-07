import Body from './components/Body.vue';
import addArticle from './components/addArticle.vue';
import About from './components/about.vue';
import article from './components/article.vue';
export default [
  {path: '/', component: Body},
  {path: '/add', component: addArticle},
  {path: '/about', component: About},
  {path: '/article/:id', component: article}

]
