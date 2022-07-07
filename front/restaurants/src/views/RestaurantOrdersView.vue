<template>
  
    <div class="restaurant--orders">
        <NavBar/>
        <GetAllProducts/>
        <FooTer/>
    </div>

</template>

<script>

import NavBar from '@/components/NavBar.vue'
import GetAllProducts from '@/components/GetAllProducts.vue'
import FooTer from '@/components/FooTer.vue'
// import axios from "axios";

export default {
    name: "RestaurantOrdersView",
    components: {
        NavBar,
        GetAllProducts,
        FooTer,
    }
}
//     data() {
//         return {
//             orders: null
//         }
//     },
//     mounted() {
//         axios
//         .get("http://localhost:8081/orders/restaurant/" + this.id)
//         .then(response => {
//             this.products = response.data['articles']
//             console.log(this.products)
//         })
//         .catch(e => {
//             this.errors.push(e)
//         })
//     },
//     props: ['id']
// }
</script>

<style lang="scss">

// .content-table {
//   font-family: 'Source Sans 3', sans-serif;
// }

// .ta-center {
//   text-align: center;
// }

// .fw-bold {
//   font-weight: bold;
// }

// .accepted {
//   background-color: #bef6be;
// }

// .rejected {
//   background-color: #ffa9a4;
// }

// .pending {
//   background-color: #fffab5;
// }

// .content-table {
//   border-collapse: collapse;
//   margin: 0px auto 40px auto;
//   font-size: 0.9em;
//   min-width: 400px;
//   border-radius: 5px 5px 0 0;
//   overflow: hidden;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

//   .table--icons {
//     display: flex;
//     flex-direction: row;
//     align-content: center;
//     justify-content: space-between;
    
//     a {
//       text-decoration: none;
//     }
//   }
// }

// .content-table thead tr {
//   background-color: rgb(84, 105, 212);;
//   color: #ffffff;
//   text-align: left;
//   font-weight: bold;
// }

// .content-table th,
// .content-table td {
//   padding: 12px 15px;
// }

// .content-table tbody tr {
//   border-bottom: 1px solid #dddddd;
// }

// .content-table tbody tr:nth-of-type(even) {
//   background-color: #f3f3f3;
// }

</style>