<template>
  
    <div class="addproducts--card">
        <div class="addproducts--title">
            <h4>Add a new product</h4>
        </div>
        <form @submit.prevent="HandleForm" class="addproducts--form">
            <label class="addproducts--label" for="image">Image</label>
            <input class="input--general input--text" id="image" type="file" name="image">

            <label class="addproducts--label" for="name">Name</label>
            <input class="input--general input--text" v-model="name" id="name" type="text" name="name">

            <label class="addproducts--label" for="price">Price</label>
            <input class="input--general input--text" v-model="price" id="price" type="number" name="price">

            <input class="input--general input--submit" type="submit" name="submit" value="Add">
        </form>
    </div>

</template>

<script>

export default {
    name: "AddProducts"
}
</script>

<style lang="scss">

.addproducts--card {
    padding: 24px 48px 12px 48px;
    margin: 0px auto 40px auto;
    max-width: 390px;
    border-radius: 7px;
    box-shadow: rgb(60 66 87 / 12%) 0px 7px 14px 0px, rgb(0 0 0 / 12%) 0px 3px 6px 0px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;

    .addproducts--title {
        font-size: 20px;
        line-height: 28px;
        color: #1a1f36;
        margin-bottom: 30px;

        h4 {
            margin: 0;
        }
    }

    .addproducts--form {

        input[type="text"] {
            letter-spacing: 0px;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
        }

        .addproducts--label {
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
            box-sizing: border-box;
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
            font-weight: bold;
        }

        .input--submit:hover {
            background-color: rgb(77, 95, 185);
            transition: ease-in-out 0.2s;
        }
    }
}

</style>