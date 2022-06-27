<template>
  
    <div class="edit--acount">
        <div class="account--card">
            <div class="account--title">
                <p>Edit your account</p>
            </div>
            <div class="account--form">
                <label class="account--label" for="firstname">Firstname</label>
                <input class="input--general input--text" id="firstname" type="text" name="firstname">

                <label class="account--label" for="lastname">Lastname</label>
                <input class="input--general input--text" id="lastname" type="text" name="lastname">

                <label class="account--label" for="email">Email</label>
                <input class="input--general input--text" id="email" type="email" name="email">

                <label class="account--label" for="phone_number">Phone number</label>
                <input class="input--general input--text" id="phone_number" type="number" name="phone_number">

                <label class="account--label" for="new_password">New password</label>
                <input class="input--general input--text" id="new_password" type="password" name="new_password">

                <label class="account--label" for="confirm_password">Confirm password</label>
                <input class="input--general input--text" id="confirm_password" type="password" name="confirm_password">

                <input class="input--general input--submit" type="submit" name="submit" value="Save changes">
            </div>
        </div>
        <a href="" class="disconnect--acount">Disconnect</a>
    </div>

</template>

<script>
export default {
    name: "EditAccount",
}
</script>

<style lang="scss">

* {
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
}

.account--card {
    padding: 24px 48px 12px 48px;
    margin: 0px auto 40px auto;
    max-width: 390px;
    border-radius: 7px;
    box-shadow: rgb(60 66 87 / 12%) 0px 7px 14px 0px, rgb(0 0 0 / 12%) 0px 3px 6px 0px;

    .account--title {
        font-size: 20px;
        line-height: 28px;
        color: #1a1f36;
        margin-bottom: 30px;

        p {
            margin: 0;
        }
    }

    .account--form {

        input[type="text"] {
            letter-spacing: 0px;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
        }

        .account--label {
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

.disconnect--acount {
    display: block;
    text-align: center;
    margin: 0px auto 40px auto;
    max-width: 390px;
    border-radius: 7px;
    box-shadow: rgb(60 66 87 / 12%) 0px 7px 14px 0px, rgb(0 0 0 / 12%) 0px 3px 6px 0px;
    padding: 8px 16px;
    background-color: #f37872;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
}

</style>