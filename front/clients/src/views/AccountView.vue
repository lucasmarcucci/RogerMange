<template>
  
    <div class="account--view">
        <NavBar/>
        <ProfileCard :user_infos="user_infos"/>
        <FooTer/>
    </div>

</template>

<script>

import axios from "axios";
import NavBar from '@/components/NavBar.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import FooTer from '@/components/FooTer.vue'
import { useStore } from 'vuex'

export default {
    Name:"AccountView",
    data() {
        return {
            user_infos: null
        }
    },
    components: {
        NavBar,
        ProfileCard,
        FooTer,
    },
    beforeCreate() {
        const store = useStore()
        store.commit('loadUser');
        const user = JSON.stringify(this.$store.getters.user)
        console.log(user)

        axios
        .get("http://localhost:8081/two/register/")
        .then(response => {
            // this.user_infos = ref({})
            this.user_infos = response.data
            console.log(this.user_infos)
        })
        .catch(e => {
            console.log(e)
        })
    },
    // props: ['id']
}

</script>

<style lang="scss">

</style>