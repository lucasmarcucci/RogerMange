<template>
  
    <div class="signup--card">
        <div class="signup--title">
            <p>Sign up</p>
        </div>
        <div class="signup--form">
            <label class="signup--label" for="firstname">Firstname</label>
            <input class="input--general input--text" id="firstname" type="text" name="firstname">

            <label class="signup--label" for="lastname">Lastname</label>
            <input class="input--general input--text" id="lastname" type="text" name="lastname">

            <label class="signup--label" for="email">Email</label>
            <input class="input--general input--text" id="email" type="email" name="email">

            <label class="signup--label" for="phone_number">Phone number</label>
            <input class="input--general input--text" id="phone_number" type="number" name="phone_number">

            <label class="signup--label" for="password">Password</label>
            <input class="input--general input--text" id="password" type="password" name="password">

            <label class="signup--label" for="confirm_password">Confirm password</label>
            <input class="input--general input--text" id="confirm_password" type="password" name="confirm_password">

            <input class="input--general input--submit" type="submit" name="submit" value="Sign up">
        </div>
    </div>

</template>

<script>
export default {
    name: "SignUp",
}
</script>

<style lang="scss">

* {
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
}

.signup--card {
    padding: 24px 48px 12px 48px;
    margin: 0px auto 40px auto;
    max-width: 390px;
    border-radius: 7px;
    box-shadow: rgb(60 66 87 / 12%) 0px 7px 14px 0px, rgb(0 0 0 / 12%) 0px 3px 6px 0px;

    .signup--title {
        font-size: 20px;
        line-height: 28px;
        color: #1a1f36;
        margin-bottom: 30px;

        p {
            margin: 0;
        }
    }

    .signup--form {

        input[type="text"] {
            letter-spacing: 0px;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
        }

        .signup--label {
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