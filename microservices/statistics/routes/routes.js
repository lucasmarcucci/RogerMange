const express = require("express");
const router = express.Router();

const axios = require("axios");

// get all order for the restaurant
router.get("/stats/:id", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3010/restaurantorders/restaurant_id");
    if (response) {
        res.json(response.data);
      } else {
        res.status(404).send("Order Not found!");
      }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
