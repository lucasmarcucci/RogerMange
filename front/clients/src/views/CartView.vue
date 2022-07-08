<template>
    <div class="cart--view">
        <NavBar/>
        <div class="cart--card">
            <div class="cart--title">
                <p>Shooping Cart</p>
            </div>
            <div class="wrapper--cart--items">
                <ProductsCart :key="index" v-for="(productItem, index) in articles" :info_cart="productItem"/>
            </div>
            <div class="cart--item cart--totalprice">
                <p>Total</p><p>$ {{ totalPrice }}</p>
            </div>
            <a href="#" class="cart--checkout">Checkout</a>
        </div>
        <FooTer/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ProductsCart from '@/components/ProductsCart.vue'
import FooTer from '@/components/FooTer.vue'

export default {
    name: "CartView",
    data() {
      return {
        articles: null,
        totalPrice: null
      }
    },
    mounted() {
        this.articles = this.$store.getters.cart.articles
        this.totalPrice = this.$store.getters.cart.totalPrice
        console.log('this.articles, this.totalPrice')
        console.log(this.articles)
        console.log(this.totalPrice)
    },
    components: {
        NavBar,
        ProductsCart,
        FooTer,
  },
}
</script>

<style lang="scss">

.cart--view {
    position: fixed;
    background-image: url(../../public/background.jpg);
    background-size: cover;
    width: 100%;
}

.cart--card {
    background-color: #fff;
    padding: 24px 48px 12px 48px;
    margin: 0px auto 40px auto;
    max-width: 390px;
    border-radius: 7px;
    box-shadow: rgb(60 66 87 / 12%) 0px 7px 14px 0px, rgb(0 0 0 / 12%) 0px 3px 6px 0px;

    .cart--title {
        font-size: 20px;
        line-height: 28px;
        color: #1a1f36;
        margin-bottom: 30px;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;

        p {
            margin: 0;
        }
    }

    hr {
        width: 100%;
        border: 0;
        height: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }

    .cart--totalprice {
        margin: 10px 0px 40px 0px;
        font-weight: bold;
    }

    .cart--checkout {
        box-sizing: border-box;
        width: 100%;
        padding: 8px 16px;
        margin-bottom: 20px;
        border-radius: 4px;
        border: unset;
        background-color: rgb(84, 105, 212);
        box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(84 105 212) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
        text-align: center;
    }
}

</style>