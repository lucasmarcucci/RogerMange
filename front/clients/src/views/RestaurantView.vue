<template>
  
    <div class="restaurant--items">
        <ProductCard/>
    </div>

</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
    name: "RestaurantView",
    components: {
        ProductCard
    }
}
</script>

<style>

</style>