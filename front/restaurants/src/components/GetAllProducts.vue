<template>
  
    <div class="restaurant--orders--pending">
        <table class="content-table">
            <thead>
                <tr>
                    <th>ProductID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th class="ta-center">Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="index" v-for="(article, index) in user_infos.articles">
                    <td class="fw-bold">{{ article._id }}</td>
                    <td>{{ article.article_name }}</td>
                    <td class="ta-center">${{ article.article_price }}</td>
                    <td class="table--icons"><a href="#"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></a></td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
export default {
    name: "GetAllProducts",
    props: {
        user_infos: Object
    },
    // created() {
    //     console.log('this.user_infos')
    //     console.log(this.user_infos)
    // },
}
</script>

<style lang="scss">

.content-table {
    font-family: 'Source Sans 3', sans-serif;
}

.ta-center {
    text-align: center;
}

.fw-bold {
    font-weight: bold;
}

.accepted {
    background-color: #bef6be;
}

.rejected {
    background-color: #ffa9a4;
}

.pending {
    background-color: #fffab5;
}

.content-table {
  border-collapse: collapse;
  margin: 0px auto 40px auto;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  .table--icons {
    
    a {
        text-decoration: none;
    }
  }
}

.content-table thead tr {
  background-color: rgb(84, 105, 212);;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.content-table th,
.content-table td {
  padding: 12px 15px;
}

.content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

</style>