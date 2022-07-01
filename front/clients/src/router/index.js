import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RestaurantView from '../views/RestaurantView.vue'
import SignupView from '../views/SignupView.vue'
import SigninView from '../views/SigninView.vue'
import AccountView from '../views/AccountView.vue'
import OrdersView from '../views/OrdersView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/restaurant/:name/:id',
    name: 'restaurant', 
    component: RestaurantView,
    props: true
  },
  {
    path: '/signup',
    name: 'signup', 
    component: SignupView,
  },
  {
    path: '/signin',
    name: 'signin', 
    component: SigninView,
  },
  {
    path: '/account/:id',
    name: 'account', 
    component: AccountView,
    props: true
  },
  {
    path: '/orders/:id',
    name: 'orders', 
    component: OrdersView,
    props: true
  }
  // {
  //   path: '/cart',
  //   name: 'cart', 
  //   component: CartView,
  // }
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
