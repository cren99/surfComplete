import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BrowseSurfers from '../views/Surfers.vue'
import Favs from '../views/About.vue'
import Chat from '../views/Chat.vue'
import Messages from '../views/Messages.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/surfers',
    name: 'BrowseSurfers',
    component: BrowseSurfers
  },
  {
    path: '/favs',
    name: 'Favs',
    component: Favs
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
]

const router = new VueRouter({
  routes
})

export default router
