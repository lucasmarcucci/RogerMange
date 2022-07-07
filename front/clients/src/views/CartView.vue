<template>
    <div class="cart--view">
        <NavBar/>
        <ProductsCart/>
        <FooTer/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ProductsCart from '@/components/ProductsCart.vue'
import FooTer from '@/components/FooTer.vue'

export default {
    name: "CartView",
    components: {
        NavBar,
        ProductsCart,
        FooTer,
  },
}
</script>

<style lang="scss">

.cart--view {
    position: fixed;
    background-image: url(../../public/background.jpg);
    background-size: cover;
    width: 100%;
}

</style>