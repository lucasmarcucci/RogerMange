<template>
  
    <div class="restaurant--row">
        <RestaurantCard :key="index" v-for="(restaurant, index) in restaurants" :info_restaurant="restaurant" />
    </div>

</template>

<script>

import RestaurantCard from './RestaurantCard.vue';
import axios from "axios";

export default {
    name: "RestaurantRow",
    data() {
        return {
            restaurants: null
        }
    },
    components: {
        RestaurantCard,
    },
    mounted() {
        axios
        .get("http://localhost:8081/one/restaurants")
        .then(response => {
            this.restaurants = response.data
            console.log(this.restaurants)
        })
        .catch(e => {
                this.errors.push(e)
        })
    },
    props: {
        all_restaurants: Object
    }
}
</script>

<style lang="scss">

.restaurant--row {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 40px;
    flex-direction: row;
}

</style>