const express = require("express");

// Connect
require("./mongo-init");


const app  = express();
const port = 3020;
app.use(express.json());

// get all order for the restaurant
app.get("/stats/:id", (req, res) => {

});


// PORT
app.listen(port, () => {
  console.log(`Up and Running on port ${port} - This is Statistic service`);
});
