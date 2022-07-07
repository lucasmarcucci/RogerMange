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

/* add icons to the library */
library.add(faUserSecret, faUserPlus, faUser, faRightToBracket, faLocationDot, faCartShopping, faXmark)

const store = createStore({
    state () {
      return {
        user: {
            id: "",
            firstname: "",
            email: "",
            status:"",
            token: ""
        }
      }
    },
    getters: {
        user(state) {
            return state.user;
        }
    },
    mutations: {
        storeUser(state, user_Data) {
            state.user.id = user_Data.id,
            state.user.firstname = user_Data.firstname,
            state.user.email = user_Data.email,
            state.user.status = user_Data.status,
            state.user.token = user_Data.token
            // state.user.push({
            //     id: user_Data.id,
            //     firstname: user_Data.firstname,
            //     email: user_Data.email,
            //     status: user_Data.status,
            //     token: user_Data.token
            // })
        },
        loadUser(state) {
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
        },
        logout(state) {
            state.user.id = "",
            state.user.firstname = "",
            state.user.email = "",
            state.user.status = "",
            state.user.token = ""
        },
    }
})

store.subscribe((mutation, state) => {
    localStorage.setItem('user_data', JSON.stringify(state.user));
})

createApp(App)
.use(store)
.use(Notifications)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')