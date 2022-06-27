const express = require("express");
const router = express.Router();

const axios = require("axios");

// get longitute and latitude for restaurant
router.get('/getpoint', async (req, res) => {
    try {
      const response_restaurant = await axios.get(
        "http://localhost:3020/restaurants"
      );
  
      restaurants = response_restaurant.data;
  
      const response_python = await axios.post(
        "http://localhost:5000/coordinates",
        restaurants
      );
  
      coordinates = response_python.data;
      console.log(coordinates)
      res.json(coordinates)
      
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
