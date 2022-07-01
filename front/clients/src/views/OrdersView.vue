<template>
  
    <div class="orders--view">
        <NavBar/>
        
        <FooTer/>
    </div>

</template>

<script>

import axios from "axios";
import NavBar from '@/components/NavBar.vue'
import FooTer from '@/components/FooTer.vue'

export default {
    name: "OrdersView",
    data() {
        return {
            orders_info: null
        }
    },
    components: {
        NavBar,
        FooTer
    },
    mounted() {
        axios
        .get("http://localhost:8081/four/orders")
        .then(response => {
            this.orders_info = response.data
            console.log(this.orders_info)
        })
        .catch(e => {
            console.log(e)
        })
    },
    props: ['id']
}
</script>

<style lang="scss">



</style>