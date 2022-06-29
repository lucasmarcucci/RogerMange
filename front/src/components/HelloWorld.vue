<template>
  <div class="navbar">
    <div class="links">
        <p>Oui</p>
        <p>Oui</p>
        <p>Oui</p>
        <p>Oui</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .navbar {
    height: 25vh;
    padding: 1rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 8px 0px;

    .links {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
  }

</style>
