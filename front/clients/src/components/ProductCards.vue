<template>
  
    <div class="productcards">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>

</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
    name: "ProductCards",
    components: {
        ProductCard
    }
}
</script>

<style lang="scss">

</style>