<template>
  <div class="home">
    <NavBar/>
    <RestaurantRow/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import RestaurantRow from '@/components/RestaurantRow.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    RestaurantRow
  }
}
</script>
