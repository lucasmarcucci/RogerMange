<template>
  <div class="home">
    <NavBar/>
    <!-- <RestaurantOrdersView/> -->
    <!-- <RestaurantOrdersSuccess/> -->
    <!-- <RestaurantOrdersFailure/>
    <RestaurantOrdersPending/> -->
    <FooTer/>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
// import RestaurantOrdersView from '../views/RestaurantOrdersView.vue'
import FooTer from '@/components/FooTer.vue'
// import RestaurantOrdersSuccess from '@/components/RestaurantOrdersSuccess.vue'
// import RestaurantOrdersFailure from '@/components/RestaurantOrdersFailure.vue'
// import RestaurantOrdersPending from '@/components/RestaurantOrdersPending.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    // RestaurantOrdersSuccess,
    // RestaurantOrdersFailure,
    // RestaurantOrdersPending,
    FooTer
  }
}
</script>
