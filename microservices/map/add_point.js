const express = require("express");

const axios = require("axios");

const app  = express();
const port = 3040;
app.use(express.json());

app.use(express.static('public'));

app.get('/getpoint', async (req, res) => {
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

// PORT
app.listen(port, () => {
    console.log(`Up and Running on port ${port} - This is Map service`);
  });  