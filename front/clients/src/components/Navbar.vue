<template>
  
    <div class="navbar">
        <div class="links">
            <div class="links--left">
                <router-link to="/"><span class="society--name">Roger Mange</span></router-link>
            </div>
            <div class="links--right">
                <router-link to="/signup"><span class="links">Register</span></router-link>
                <router-link to="/signin"><span class="links m-left">Log in</span></router-link>
                <router-link class="links m-left" :to="{name: 'account', params: { id: 2 }}">Account</router-link>
                <!-- Mettre valeur de cookie_id sur le routeur link just au dessus -->
                <!-- <router-link to="/account"><span class="links m-left">Account</span></router-link> -->
                <!-- /account attend un id sinon il met une erreur -->
                 <!-- v-if="is_connected()" -->
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "NavBar",
    // methods: {
    //     is_connected() {
        
    //     }
    // }
}
</script>

<style lang="scss">

.navbar {
    font-family: 'Roboto', sans-serif;
    height: auto;
    padding: 25px 50px;
    margin-bottom: 40px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 8px 0px;

    .links {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .links--left {
            display: flex;
            align-items: center;
            justify-content: left;
        }

        .links--right {
            display: flex;
            align-items: center;
            justify-content: right;
        }

        .society--name {
            font-weight: bold;
        }

        .navbar--links {
            font-weight: 500;
            padding: 5px 12px;
            background-color: #f4f4f4;
            border-radius: 500px;
            text-decoration: none;
            color: black;
        }
    }
}

.m-left {
    margin-left: 15px;
}

</style>