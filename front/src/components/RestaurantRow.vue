<template>
  
    <div class="restaurant--wrapper">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
    </div>

</template>

<script>
import RestaurantCard from './RestaurantCard.vue';

export default {
    name: "RestaurantRow",
    components: {
        RestaurantCard,
    },
}
</script>

<style lang="scss">

    .restaurant--wrapper {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 40px;
    }

</style>