import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import CSS from '../views/Css.vue'
import Html from '../views/Html.vue'
import JavaScript from '../views/JavaScript.vue'
import VueSnippets from '../views/VueSnippets.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/css',
    name: 'CSS',
    component: CSS
  },
  {
    path: '/html',
    name: 'Html',
    component: Html
  },
  {
    path: '/javascript',
    name: 'JavaScript',
    component: JavaScript
  },
  {
    path: '/vue',
    name: 'VueSnippets',
    component: VueSnippets
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
