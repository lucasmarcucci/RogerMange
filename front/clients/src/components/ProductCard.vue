<template>

  <div class="menu-item">
      <img class="menu-item-image" src="../assets/images/b1.png" alt="Bruschetta">
      <div class="menu-item-text">
          <h3 class="menu-item-heading">
              <span class="menu-item-name">{{ info_product.article_name }}</span> | <span class="menu-item-price">${{ info_product.article_price }}</span>
          </h3>
      </div>
      <!-- <span><img src="../assets/images/plus.png" class="add-btn"></span> -->
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
    width: 280px;
    align-items: center;
    margin-bottom: 50px;
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
    margin: 0;
    align-items: center;
    justify-content: space-around;
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
    box-shadow: 0px 0px 12px 0px rgba(128,119,119,0.75);
    transition: ease-in-out 0.2s;
  }

</style>