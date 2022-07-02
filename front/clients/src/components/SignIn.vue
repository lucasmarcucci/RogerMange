<template>

    <div class="signin--card">
        <div class="signin--title">
            <p>Sign in to your account</p>
        </div>
        <form @submit.prevent="HandleForm" class="signin--form">
            <label class="signin--label" for="email">Email</label>
            <input class="input--general input--text" v-model="email" id="email" type="email" name="email">

            <label class="signin--label" for="password">Password</label>
            <input class="input--general input--text" v-model="password" id="password" type="password" name="password">

            <input class="input--general input--submit" type="submit" name="submit" value="Sign in">
        </form>
    </div>

</template>

<script>
import axios from "axios";

export default {
    name: "SignIn",
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        HandleForm() {
            const form_data = {
                client_email: this.email,
                client_password: this.password,
            }

            axios
            .post("http://localhost:8081/three/login/", form_data)
            .then(response => {
                this.$cookie.setCookie("token", response, {
                    expire: '1d',
                })
                // this.$cookie.set("token", response)
                console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

<style lang="scss">

.signin--card {
    padding: 24px 48px 12px 48px;
    margin: 0px auto 40px auto;
    max-width: 390px;
    border-radius: 7px;
    box-shadow: rgb(60 66 87 / 12%) 0px 7px 14px 0px, rgb(0 0 0 / 12%) 0px 3px 6px 0px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;

    .signin--title {
        font-size: 20px;
        line-height: 28px;
        color: #1a1f36;
        margin-bottom: 30px;

        p {
            margin: 0;
        }
    }

    .signin--form {

        .signin--label {
            display: block;
            margin-bottom: 8px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0px;
            cursor: pointer;
        }

        .input--general  {
            width: 100%;
            padding: 8px 16px;
            margin-bottom: 20px;
            border-radius: 4px;
            border: unset;
        }

        .input--text {
            outline-color: rgb(84 105 212 / 0.5);
            box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px;
        }

        .input--submit {
            background-color: rgb(84, 105, 212);
            box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(84 105 212) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
            color: #fff;
            font-weight: 500;
            cursor: pointer;
        }

        .input--submit:hover {
            background-color: rgb(77, 95, 185);
            transition: ease-in-out 0.2s;
        }
    }
}

</style>