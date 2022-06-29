const express = require("express");
const router = express.Router();

const axios = require("axios");

// get all order for the restaurant
router.get("/stats/:id", async (req, res) => {
  try {
    const response = await axios.get(
      "http://localhost:3010/restaurantorders/restaurant_id"
    );

    orders = response.data;

    var test2 = get_totalPrice_perMonth(orders);

    console.log(test2);

    if (response) {
      res.json(test2);
    } else {
      res.status(404).send("Order Not found!");
    }
  } catch (error) {
    console.error(error);
  }
});

function get_totalPrice_perMonth(data) {
  var returnvalue = [];
  var numberoforder = 0;
  var total = 0;

  var pricemonth = [];

  for (var i = 0; i < data.length; i++) {
    pricemonth.push([data[i].totalPrice, data[i].date]);
    numberoforder++;
  }

  //pricemonth.forEach(element => console.log(element));

  const grouped = pricemonth.reduce((prev, cur) => {
    const date = new Date(cur[1]);
    const key = `${date.getMonth() + 1}-${date.getFullYear()}`;

    if (!prev[key]) {
      prev[key] = [cur];
    } else {
      prev[key].push(cur);
    }

    return prev;
  }, []);

  for (let i in grouped) {
    console.log(grouped[i]);
  }

  //console.log(alldates);

  returnvalue = [numberoforder, total];
  return returnvalue;
}

module.exports = router;
