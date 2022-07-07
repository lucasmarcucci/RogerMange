<template>
  
    <div class="orders--view">
        <NavBar/>

            <div class="orders">
                <h2 class="products--title"><span class="border-bottom">HISTORIC</span></h2>
                <div class="order--history--row">
                    <div class="left">
                        <p class="order--history--name">Burger King</p>
                        <p class="order--history--date">11-20-2022 20:18</p>
                    </div>
                    <div class="right">
                        <p class="order--history--totalprice">18$</p>
                    </div>
                </div>
            </div>

        <FooTer/>
    </div>

</template>

<script>

import axios from "axios";
import NavBar from '@/components/NavBar.vue'
import FooTer from '@/components/FooTer.vue'

export default {
    name: "OrdersView",
    data() {
        return {
            orders_info: null
        }
    },
    components: {
        NavBar,
        FooTer
    },
    mounted() {
        axios
        .get("http://localhost:8081/four/orders")
        .then(response => {
            this.orders_info = response.data
            console.log(this.orders_info)
        })
        .catch(e => {
            console.log(e)
        })
    },
    props: ['id']
}
</script>

<style lang="scss">

.orders {
    width: 90%;
    margin: auto;
}

.products--title {
    font-family: 'Source Sans 3', sans-serif;
    text-align: center;
    font-size: 35px;
}

.border-bottom {
    border-bottom: 3px solid rgb(84, 105, 212);;
}

.order--history--row {
    font-family: 'Roboto';
    box-sizing: border-box;
    background-color: rgb(227, 227, 227);
    margin-bottom: 10px;
    padding: 10px 30px;
    height: 60px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.16) 1px 1px 2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    border-radius: 10px;

    p {
        margin: 0px;
        font-weight: bold;
    }

    .order--history--name {
        margin-bottom: 5px;
    }

    .order--history--date {
        font-weight: lighter;
        font-size: smaller;
    }

    .order--history--totalprice {
        padding: 5px 12px;
        background-color: rgb(84, 105, 212);
        border-radius: 500px;
        color: #fff;
    }
}

.order--history--row:hover {
    background-color: #f8f5f5;
    transition: ease-in-out 0.2s;
}

</style>