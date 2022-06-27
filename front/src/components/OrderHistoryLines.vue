<template>
  
    <div class="order--history--wrapper">
        <OrderHistoryRow/>
        <OrderHistoryRow/>
        <OrderHistoryRow/>
    </div>

</template>

<script>
import OrderHistoryRow from './OrderHistoryRow.vue';

export default {
    name: "OrderHistoryLines",
    components: {
        OrderHistoryRow,
    },
}
</script>

<style lang="scss">

</style>