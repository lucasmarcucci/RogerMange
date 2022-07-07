<template>
  
    <div class="restaurant">
        <NavBar/>
        <div class="container">
            <h2 class="products--title"><span class="border-bottom">PRODUCTS</span></h2>
            <div class="products--cards">
                <ProductCard :key="index" v-for="(product, index) in products" :info_product="product" />
            </div>
        </div>
        <FooTer/>
    </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ProductCard from '@/components/ProductCard.vue'
import FooTer from '@/components/FooTer.vue'
import axios from "axios";

export default {
    name: "RestaurantView",
    components: {
        NavBar,
        ProductCard,
        FooTer
    },
    data() {
        return {
            products: null
        }
    },
    mounted() {
        axios
        .get("http://localhost:8081/one/restaurant/" + this.id)
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

<style lang="scss">

.container {
  width: 90%;
  margin: auto;
}

.products--title {
    font-family: 'Source Sans 3', sans-serif;
    margin-bottom: 100px;
    text-align: center;
    font-size: 35px;
}

.products--cards {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 40px;
    flex-direction: row;
    flex-wrap: wrap;
}

</style>