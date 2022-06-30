<template>
  
    <div class="restaurant">
        <NavBar/>
        <ProductCard :key="index" v-for="(product, index) in products" :info_product="product" />
    </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ProductCard from '@/components/ProductCard.vue'
import axios from "axios";

export default {
    name: "RestaurantView",
    data() {
        return {
            products: null
        }
    },
    components: {
        NavBar,
        ProductCard
    },
    mounted() {
        axios
        .get("http://localhost:8080/restaurant/" + this.id)
        .then(response => {
            this.products = response.data['articles']
            console.log(this.products)
        })
        .catch(e => {
                this.errors.push(e)
        })
    },
    props: ['id']
}
</script>

<style>

</style>