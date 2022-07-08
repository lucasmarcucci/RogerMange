<template>
  
    <div class="items">
        <div class="cart--item">
            <p><span class="item--number">1</span><span class="item--name">{{ info_cart.name }}</span></p><p><span class="item--price">$ {{ info_cart.price }}</span><span></span><button class="cross-button"><font-awesome-icon icon="fa-solid fa-xmark" /></button></p>
        </div>
        <hr>
    </div>

</template>

<script>
export default {
    name: "ProductsCart",
    // data() {
    //   return {
    //     articles: null,
    //     totalPrice: null
    //   }
    // },
    // beforeCreate() {
    //     let articlesRef = ref([]);
    //     let totalPriceRef = ref([]);
    //     this.articles = this.$store.getters.cart.articles
    //     this.totalPrice = this.$store.getters.cart.totalPrice
    //     articlesRef.value.push(this.articles)
    //     totalPriceRef.value.push(this.totalPrice)
    //     // console.log('this.articles, this.totalPrice')
    //     // console.log(this.articles)
    //     // console.log(this.totalPrice)
    //     console.log('articlesRef totalPriceRef')
    //     console.log(articlesRef.value)
    //     console.log(totalPriceRef.value[0])
    //     // console.log('this.cart')
    //     // console.log(this.cart.articles)
    // }
    props: {
        info_cart: Object
    },
}
</script>

<style lang="scss">

.cross-button {
    border: none;
    background-color: transparent;
    margin-left: 8px;
    cursor: pointer;
}

.cart--card {

    .cart--item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            margin: 0;
            font-family: 'Source Sans 3', sans-serif!important;
        }

        .item--number {
            margin-right: 5px;
            font-weight: 500;
        }
    }

    hr {
        width: 100%;
        border: 0;
        height: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
}

</style>