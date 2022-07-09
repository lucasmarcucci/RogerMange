<template>
  
    <div class="map">
        <NavBar/>
        <!-- <iframe src="https://1gk6z.csb.app/"></iframe> -->
        <iframe 
            src="http://localhost:3040"
            width="100%"
            height="600px"
            frameborder="0">
        </iframe>
    </div>

</template>

<script>
// import * as map from '../../../../microservices/map/public/map.js'
import NavBar from '@/components/NavBar.vue'

export default {
    name: "MapView",
    // mounted() {
    //     const map = document.createElement("script");
    //     map.setAttribute(
    //     "src",
    //     "../../../../microservices/map/public/map.js"
    //     );
    //     // plugin.async = true;
    //     document.head.appendChild(map);
    // },
    components: {
        NavBar,
    },
}
</script>

<style lang="scss">



</style>