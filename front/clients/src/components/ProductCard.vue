<template>
    <div class="menu">
        <h2>restaurant</h2>
        <div class="menu-group">
            <div class="menu-item">
                <img class="menu-item-image" src="../assets/images/b1.png" alt="Bruschetta">
                <div class="menu-item-text">
                    <h3 class="menu-item-heading">
                        <span class="menu-item-name">Burger</span>
                        <span class="menu-item-price">7€</span>
                    </h3>
                    <p class="menu-item-description">Du pain, de la viande de boeuf, des oignons</p>
                    <span><img src="../assets/images/plus.png" class="add-btn"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCard"
}
</script>

<style lang="scss">
  
  .menu {
    font-family: "Inter", sans-serif;
    font-size: 14px;
  }
  
  .menu-item {
    display: flex;
    box-shadow: 0px 0px 10px 0px rgba(128,119,119,0.75);
    padding: 20px;
    border-radius: 5px;
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
    justify-content: space-between;
    margin: 0;
  }
  
  .menu-item-name {
    margin-right: 1.5em;
  }
  
  .menu-item-description {
    line-height: 1.6;
  }

  .add-btn {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

</style>