import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import FindBlogUsersView from '../views/FindBlogUsersView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/findBlogUsers'
  },

  {
    path: '/findBlogUsers',
    name: 'findBlogUsers',
    component: () => import(/* webpackChunkName: "about" */ '../views/FindBlogUsersView.vue')
  },


  {
    path: '/findBlogPosts',
    name: 'findBlogPosts',
    component: () => import(/* webpackChunkName: "about" */ '../views/FindBlogPostsView.vue')
  },

  {
    path: '/findBlogComments',
    name: 'findBlogComments',
    component: () => import(/* webpackChunkName: "about" */ '../views/FindBlogCommentsView.vue')
  },

  {
    path: '/deleteBlogUser',
    name: 'deleteBlogUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/DeleteBlogUserView.vue')
  },

  {
    path: '/updateLastName',
    name: 'updateLastName',
    component: () => import(/* webpackChunkName: "about" */ '../views/UpdateLastNameView.vue')
  },

  {
    path: '/createBlogUser',
    name: 'createBlogUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateBlogUserView.vue')
  },




]

const router = new VueRouter({
  routes
})

export default router
