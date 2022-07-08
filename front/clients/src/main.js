import { createApp } from 'vue'
import { createStore } from 'vuex'
import Notifications from 'notiwind'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faUserPlus, faUser, faRightToBracket, faLocationDot, faCartShopping, faXmark, faCartPlus)

const store = createStore({
    state () {
      return {
        user: {
            id: "",
            firstname: "",
            email: "",
            status:"",
            token: ""
        },
        cart: {
            articles: [],
            totalPrice: 0
        }
      }
    },
    getters: {
        user(state) {
            return state.user;
        },
        cart(state) {
            return state.cart
        }
    },
    mutations: {
        storeUser(state, user_Data) {
            state.user.id = user_Data.id,
            state.user.firstname = user_Data.firstname,
            state.user.email = user_Data.email,
            state.user.status = user_Data.status,
            state.user.token = user_Data.token
        },
        loadLocalStorage(state) {
            if(localStorage.getItem('user_data')) {
                try {
                    const localStoragedata = JSON.parse(localStorage.getItem('user_data'))
                    state.user.id = localStoragedata.id,
                    state.user.firstname = localStoragedata.firstname,
                    state.user.email = localStoragedata.email,
                    state.user.status = localStoragedata.status,
                    state.user.token = localStoragedata.token
                }
                catch(e) {
                    console.log('Could not initialize store', e);
                }
            }
            if(localStorage.getItem('cart_data')) {
                try {
                    const localStorageCartData = JSON.parse(localStorage.getItem('cart_data'))
                    // console.log(localStorageCartData)
                    state.cart.totalPrice = localStorageCartData.totalPrice,
                    state.cart.articles = localStorageCartData.articles
                    console.log(state.cart)
                }
                catch(e) {
                    console.log('Could not initialize store', e);
                }
            }
        },
        // loadUser(state) {
            
        // },
        logout(state) {
            state.user.id = "",
            state.user.firstname = "",
            state.user.email = "",
            state.user.status = "",
            state.user.token = ""
        },
        addItemToCart(state, item) {
            state.cart.articles.push(item)
            state.cart.totalPrice += item.price
            console.log('addItemToCart')
            console.log(state.cart)
        },
        // loadCart(state) {
            
        // },
    }
})

store.subscribe((mutation, state) => {
    localStorage.setItem('user_data', JSON.stringify(state.user));
    localStorage.setItem('cart_data', JSON.stringify(state.cart));
})

createApp(App)
.use(store)
.use(Notifications)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')