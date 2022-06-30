<template>
  
    <div class="productcards">
        <ProductCard/>
    </div>

</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import axios from "axios";

export default {
    name: "ProductCards",
    data() {
        return {
            products: null
        }
    },
    components: {
        ProductCard
    },
    props: {
        info_product: Object
    },
}
</script>

<style lang="scss">

</style>