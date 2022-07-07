<template>
  
    <div class="cart--card">
        <div class="cart--title">
            <p>Shooping Cart</p>
        </div>
        <div class="wrapper--cart--items">
            
            <div class="cart--item">
                <p><span class="item--number">1</span><span class="item--name">Margerite</span></p><p><span class="item--price">$ 10.99</span><span></span><button class="cross-button"><font-awesome-icon icon="fa-solid fa-xmark" /></button></p>
            </div>
            <hr>
            <div class="cart--item">
                <p><span class="item--number">5</span><span class="item--name">Big Burger</span></p><p><span class="item--price">$ 66.30</span><button class="cross-button"><font-awesome-icon icon="fa-solid fa-xmark" /></button></p>
            </div>
            <hr>
            <div class="cart--item">
                <p><span class="item--number">1</span><span class="item--name">Happy Meal</span></p><p><span class="item--price">$ 5.22</span><button class="cross-button"><font-awesome-icon icon="fa-solid fa-xmark" /></button></p>
            </div>
            <hr>
            <div class="cart--item cart--totalprice">
                <p>Total</p><p>$ 30.00</p>
            </div>

            <a href="#" class="cart--checkout">Checkout</a>
        </div>
    </div>

</template>

<script>
export default {
    name: "ProductsCart"
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

    .wrapper--cart--items {
        display: flex;
        flex-direction: column;

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
}

</style>