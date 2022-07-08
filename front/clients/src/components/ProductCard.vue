<template>

  <!-- <div class="product--card">
      <div class="product--image"></div>
      <div class="product--informations">
          <p class="name"></p>
          <p class="price"></p>
      </div>
  </div> -->

  <div class="menu-item">
      <img class="menu-item-image" src="../assets/images/b1.png" alt="Bruschetta">
      <div class="menu-item-text">
          <p class="menu-item-heading">
              <span class="menu-item-name">{{ info_product.article_name }}</span><span class="menu-item-price">${{ info_product.article_price }}</span>
          </p>
      </div>
      <button @click.prevent="addToCart(info_product)" class="add-cart"><font-awesome-icon icon="fa-solid fa-cart-plus" />
        <input id="price" type="hidden" :value="info_product.article_price">
      </button>
  </div>

</template>

<script>

export default {
    name: "ProductCard",
    data() {
        return {
            products: null
        }
    },
    // beforeCreate() {
    //   console.log('load cart')
    //     this.$store.commit('loadCart');
    // },
    methods: {
      addToCart(product) {
        this.$store.commit('addItemToCart', {
          name: product.article_name,
          price: product.article_price
        })
      }
    },
    props: {
        info_product: Object
    },
}
</script>

<style lang="scss">
  
  .menu {
    font-family: "Inter", sans-serif;
    font-size: 14px;
  }
  
  .menu-item {
    display: flex;
    box-shadow: 0px 0px 8px 0px rgba(128,119,119,0.75);
    padding: 20px;
    border-radius: 5px;
    width: 200px;
    align-items: center;
    margin-bottom: 50px;
    margin: 0px 10px 40px 10px;
    font-family: 'Roboto';
    position: relative;

    .add-cart {
      font-size: 20px;
      position: absolute;
      right: 5%;
      top: 5%;
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
  
  .menu-item-image {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    object-fit: cover;
    margin-right: 1.5em;
  }
  
  .menu-item-text {
    flex-grow: 1;
  }
  
  .menu-item-heading {
    display: flex;
    flex-direction: column;
    margin: 0;
    justify-content: space-around;

    .menu-item-name {
      font-size: 15px;
      font-weight: bold;
    }

    .menu-item-price {
      font-size: 20px;
    }
  }
  
  .menu-item-description {
    line-height: 1.6;
  }

  .add-btn {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .menu-item:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: ease-in-out 0.2s;
  }

</style>