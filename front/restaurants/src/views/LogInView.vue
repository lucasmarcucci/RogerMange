<template>
  
    <div class="LogInView">
        <NavBar/>
        <LogIn/>
        <FooTer/>
    </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import LogIn from '@/components/LogIn.vue'
import FooTer from '@/components/FooTer.vue'

export default {
    name: "LogInView",
    components: {
    NavBar,
    LogIn,
    FooTer
}
}
</script>

<style lang="scss">



</style>