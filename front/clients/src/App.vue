<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{name: 'restaurant', params: {name: 'Mcdo'}}">Mcdo</router-link>
    <router-link :to="{name: 'restaurant', params: {name: 'Burger King'}}">Burger King</router-link>
    <!-- <router-link to="/about">About</router-link> -->
    <!-- <RestaurantView/> -->
  </nav>
  <!-- <router-view/> -->
</template>

<script>
// import RestaurantView from '@/views/RestaurantView.vue'

export default {
  name: 'App',
  components: {
    // RestaurantView,
  }
}

// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//   setup() {
    
//   },
// })
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
