<template>
  
    <div class="order--history--row">
        <div class="left">
            <p class="order--history--name">Burger King</p>
            <p class="order--history--date">11-20-2022 20:18</p>
        </div>
        <div class="right">
            <p class="order--history--totalprice">18$</p>
        </div>
    </div>

</template>

<script>
export default {
    name: "OrderHistoryRow",
}
</script>

<style lang="scss">

* {
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
}

.order--history--row {
    margin-bottom: 10px;
    padding: 10px 30px;
    height: 60px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.16) 1px 1px 2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

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