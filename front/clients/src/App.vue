<template>

  <div id="app">
    <router-view/>
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {
  }
}

// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//   setup() {
    
//   },
// })
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500&family=Roboto:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700&display=swap');

body {
  margin: 0;
  padding: 0;
}

#app {
  box-sizing: border-box;
  
  a {
    text-decoration: none;
  }
}
</style>
