<template>
  
    <div class="signup">
        <NavBar/>
        <SignIn/>
        <FooTer/>
    </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SignIn from '@/components/SignIn.vue'
import FooTer from '@/components/FooTer.vue'

export default {
    name: "SignupView",
    components: {
    SignIn,
    NavBar,
    FooTer
},
}
</script>

<style lang="scss">

.signup {
    position: fixed;
    background-image: url(../../public/background.jpg);
    background-size: cover;
    width: 100%;
}

</style>