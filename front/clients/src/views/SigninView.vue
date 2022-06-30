<template>
  
    <div class="signup">
        <NavBar/>
        <SignIn/>
    </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SignIn from '@/components/SignIn.vue'

export default {
    name: "SignupView",
    components: {
        SignIn,
        NavBar
    },
}
</script>

<style lang="scss">



</style>