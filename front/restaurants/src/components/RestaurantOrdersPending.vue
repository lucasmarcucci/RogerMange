<template>
  
    <div class="restaurant--orders--pending">
        <table class="content-table">
            <thead>
                <tr>
                    <th>OrderID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Address</th>
                    <th class="ta-center">Total Price</th>
                    <th class="ta-center">Status</th>
                    <th class="ta-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="fw-bold">UNA6AFAG6</td>
                    <td>Lucas</td>
                    <td>11-20-2022 18:10:12</td>
                    <td>8B rue de beaulieu Cagnes sur mer</td>
                    <td class="ta-center">49.20$</td>
                    <td class="ta-center pending">Pending</td>
                    <td class="table--icons"><a href="#"><font-awesome-icon icon="fa-solid fa-check" /></a><a href="#"><font-awesome-icon icon="fa-solid fa-xmark" /></a></td>
                </tr>
                <tr>
                    <td class="fw-bold">ABubakuebfa</td>
                    <td>Thomas</td>
                    <td>11-20-2022 18:10:12</td>
                    <td>La terre du milieu</td>
                    <td class="ta-center">71.99$</td>
                    <td class="ta-center pending">Pending</td>
                    <td class="table--icons"><a href="#"><font-awesome-icon icon="fa-solid fa-check" /></a><a href="#"><font-awesome-icon icon="fa-solid fa-xmark" /></a></td>
                </tr>
                <tr>
                    <td class="fw-bold">ABFbahkjhda</td>
                    <td>Quentin</td>
                    <td>11-20-2022 18:10:12</td>
                    <td>145ème trou de hobbit</td>
                    <td class="ta-center">20.00$</td>
                    <td class="ta-center pending">Pending</td>
                    <td class="table--icons"><a href="#"><font-awesome-icon icon="fa-solid fa-check" /></a><a href="#"><font-awesome-icon icon="fa-solid fa-xmark" /></a></td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
export default {
    name: "RestaurantOrdersPending",
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
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    
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