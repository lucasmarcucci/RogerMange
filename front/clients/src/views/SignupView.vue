<template>
  
    <div class="signup">
        <NavBar/>
        <SignUp/>
    </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SignUp from '@/components/SignUp.vue'

export default {
    name: "SignupView",
    components: {
        SignUp,
        NavBar
    },
}
</script>

<style lang="scss">



</style>