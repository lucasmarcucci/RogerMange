<template>
  <div class="home">
    <NavBar/>
    <div class="container">
      <h2 class="restaurants--title">Restaurants :</h2>
      <div class="restaurant--cards">
        <RestaurantCard :key="index" v-for="(restaurant, index) in restaurants" :info_restaurant="restaurant" />
      </div>
    </div>
    <FooTer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import RestaurantCard from '@/components/RestaurantCard.vue'
import FooTer from '@/components/FooTer.vue'
import axios from "axios";

export default {
  name: 'HomeView',
  components: {
    NavBar,
    RestaurantCard,
    FooTer,
  },
  data() {
      return {
        restaurants: null
      }
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
}
</script>

<style lang="scss">

.container {
  width: 90%;
  margin: auto;
}

.restaurants--title {
  font-family: "Source Sans 3", sans-serif;
  font-size: 28px;
  margin-bottom: 100px;
}

.restaurant--cards {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>
