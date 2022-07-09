import { createRouter, createWebHistory } from 'vue-router'
import LogInView from '../views/LogInView.vue'
import AccountView from '../views/AccountView.vue'

const routes = [

  {
    path: '/',
    name: 'home',
    component: LogInView
  },
  {
    path: '/account/:id',
    name: 'account', 
    component: AccountView,
    props: true
  },
  // {
  //   path: '/orders',
  //   name: 'orders',
  //   component: RestaurantOrdersView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
