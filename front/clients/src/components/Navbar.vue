<template>

    <div class="navbar">
        <div class="links--left">
            <router-link class="bold black" to="/"><span id="logo">Roger<span class="m-left-10 blue">Mange</span></span></router-link>
        </div>
        <div class="links--right">
            <router-link class="links" to="/map"><font-awesome-icon icon="fa-solid fa-location-dot" /><span class="m-left-10">Map</span></router-link>
            <router-link v-if="is_notconnected()" class="links m-left-15" to="/signup"><font-awesome-icon icon="fa-solid fa-user-plus" /><span class="m-left-10">Register</span></router-link>
            <router-link v-if="is_notconnected()" class="links m-left-15" to="/signin"><font-awesome-icon icon="fa-solid fa-right-to-bracket" /><span class="m-left-10">Log in</span></router-link>
            <router-link v-if="!is_notconnected()" class="links m-left-15" to="/cart"><font-awesome-icon icon="fa-solid fa-cart-shopping" /><span class="m-left-10">Cart</span></router-link>
            <router-link v-if="!is_notconnected()" @click.prevent="logout" class="links m-left-15" to="/"><font-awesome-icon icon="fa-solid fa-right-to-bracket" /><span class="m-left-10">Log out</span></router-link>
            <router-link v-if="!is_notconnected()" class="links m-left-15" to="/account"><font-awesome-icon icon="fa-solid fa-user" /><span class="m-left-10">Account</span></router-link>
        </div>
    </div>
  
    <!-- <div class="navbar">
        <div class="links">
            <div class="links--left">
                <router-link to="/"><span class="society--name">Roger Mange</span></router-link>
            </div>
            <div class="links--right">
                <router-link to="/signup"><span class="links">Register</span></router-link>
                <router-link to="/signin"><span class="links m-left">Log in</span></router-link> -->
                <!-- <router-link class="links m-left" :to="{name: 'account', params: { id: 2 }}">Account</router-link> -->
                <!-- Mettre valeur de cookie_id sur le routeur link just au dessus -->
                <!-- <router-link to="/account"><span class="links m-left">Account</span></router-link> -->
                <!-- /account attend un id sinon il met une erreur -->
                 <!-- v-if="is_connected()" -->
            <!-- </div>
        </div>
    </div> -->

</template>

<script>
export default {
    name: "NavBar",
    beforeCreate() {
        this.$store.commit('loadLocalStorage');
    },
    methods: {
        is_notconnected() {
            // this.$store.commit('loadLocalStorage');
            var user = this.$store.getters.user
            if(user['token'] == "") {
                return true;
            } else {
                return false;
            }
        },
        logout() {
            this.$store.commit('logout')
            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss">

.m-left-15 {
    margin-left: 15px;
}

.m-left-10 {
    margin-left: 10px;
}

.bold {
    font-weight: bold;
}

.black {
    color: var(--uber-black);
}

.navbar {
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    margin-bottom: 40px;
    font-family: 'Roboto', sans-serif;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 8px 0px;

    #logo {
        font-size: 28px;
    }

    .blue {
        color: var(--uber-blue);
    }

    .links {
        height: 30px;
        border-radius: 50px;
        color: var(--uber-black);
        background-color: var(--uber-grey);
        padding: 4px 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .links:hover {
        transition: ease 0.4s;
        color: var(--uber-white);
        background-color: var(--uber-blue);
    }

    .links--right {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
}

@media screen and (max-width: 740px) {
  .navbar {
    flex-direction: column;
  }
}

</style>