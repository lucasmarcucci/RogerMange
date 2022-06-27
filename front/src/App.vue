<template>
  <div class="app">
    <!-- <NavBar/> -->
    <!-- <SignIn/> -->
    <!-- <SignUp/> -->
    <!-- <RestaurantCard/> -->
    <!-- <RestaurantRow/> -->
    <!-- <RestaurantRow/> -->
    <!-- <OrderHistoryRow/> -->
    <!-- <OrderHistoryLines/> -->
    <!-- <EditAccount/> -->
    <!-- <RestaurantOrders/> -->
    <ProductsCart/>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue'
// import SignIn from '@/components/SignIn.vue'
// import SignUp from '@/components/SignUp.vue'
// // import RestaurantCard from '@/components/RestaurantCard.vue'
// import RestaurantRow from '@/components/RestaurantRow.vue'
// // import OrderHistoryRow from '@/components/OrderHistoryRow.vue'
// import OrderHistoryLines from '@/components/OrderHistoryLines.vue'
// import EditAccount from '@/components/EditAccount.vue'
// import RestaurantOrders from '@/components/RestaurantOrders.vue'
import ProductsCart from '@/components/ProductsCart.vue'

export default {
  name: 'App',
  components: {
    // NavBar,
    // OrderHistoryLines,
    // // OrderHistoryRow,
    // RestaurantRow,
    // // RestaurantCard,
    // SignIn,
    // SignUp,
    // EditAccount,
    // RestaurantOrders,
    ProductsCart
  }
}
</script>

<style lang="scss">
@import url('./style/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500&family=Roboto:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700&display=swap');
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
