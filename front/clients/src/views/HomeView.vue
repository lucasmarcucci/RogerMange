<template>
  <div class="home">
    <NavBar/>
    <RestaurantRow/>
    <FooTer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import RestaurantRow from '@/components/RestaurantRow.vue'
import FooTer from '@/components/FooTer.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    RestaurantRow,
    FooTer
  }
}
</script>
