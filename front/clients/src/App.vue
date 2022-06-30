<template>

  <div id="app">
      <router-view/>
      <!-- <router-link to="/">Home</router-link> -->
      <!-- <router-link to="/about">About</router-link> -->
      <!-- <RestaurantView/> -->
  </div>

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

body {
  margin: 0;
  padding: 0;
}

#app {
  box-sizing: border-box;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
</style>
