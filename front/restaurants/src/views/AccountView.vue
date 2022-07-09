<template>
  
    <div class="Account--View">
        <NavBar/>
        <GetAllProducts :user_infos="user_infos" />
        <FooTer/>
    </div>

</template>

<script>
import axios from "axios";
import NavBar from '@/components/NavBar.vue';
import GetAllProducts from '@/components/GetAllProducts.vue';
import FooTer from '@/components/FooTer.vue';

export default {
    name: "AccountView",
    data() {
        return {
            user_infos: null
        }
    },
    components: {
        NavBar,
        GetAllProducts,
        FooTer
    },
    beforeCreate() {
        // this.$store.commit('loadUser');
        // const user = this.$store.getters.user
        // console.log('user')
        // console.log(user)

        axios
        .post("http://localhost:8082/restaurant/restaurant_id", { "id_restaurateur": this.id })
        .then(response => {
            this.user_infos = response.data[0]
            console.log(this.user_infos)
        })
        .catch(e => {
            console.log(e)
        })
    },
    // props: ['id']
    props: {
        id: String
    }
}
</script>

<style lang="scss">



</style>