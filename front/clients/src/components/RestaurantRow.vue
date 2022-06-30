<template>
  
    <div class="restaurant--row">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
    </div>

</template>

<script>

// import { mounted } from 'vue';
import RestaurantCard from './RestaurantCard.vue';
// import { response } from 'express';
import axios from "axios";

export default {
    name: "RestaurantRow",
    components: {
        RestaurantCard,
    },

    created() {
        axios.get('http://localhost:8080/restaurants')
        .then(response => {
            this.restaurants = response
            console.log(response)
        })
        .catch(e => {
             this.errors.push(e)
        })
    }
}
</script>

<style lang="scss">

.restaurant--row {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 40px;
}

</style>