<template>
  
    <div class="restaurant--card">
        <div class="restaurant--image"></div>
        <div class="restaurant--informations">
            <p class="name">Burger King</p>
        </div>
    </div>

</template>

<script>
export default {
    name: "RestaurantCard",
}
</script>

<style lang="scss">

.restaurant--card {
  width: 25%;
  height: 160px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    .restaurant--image {
        background-image: url("https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==");
        height: 70%;
        background-size: cover;
        background-position: center;
    }

    .restaurant--informations {
        height: 30%;
        padding: 10px;

        p {
            margin: 0px;
            font-family: 'Roboto';
            font-weight: 600;
        }
    }
}

</style>