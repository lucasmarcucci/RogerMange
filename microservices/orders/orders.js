const express = require("express");

// Connect
require("./mongo-init");

const Order = require("./Order");

const app  = express();
const port = 3010;
app.use(express.json());


// add order
app.post("/order", (req, res) => {
  var newOrder = new Order({
    id: req.body.id,
    restaurant_id: req.body.restaurant_id,
    user_id: req.body.user_id,
    deliver_id: req.body.deliver_id,
    date: req.body.date,
    address: req.body.address,
    products: req.body.products,
    totalPrice: req.body.totalPrice,
    status: req.body.status,
  });

  newOrder
    .save()
    .then(() => {
      res.send("Order create with success !");
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

// get all order FAUT SUPPRIMER CA APRES
app.get("/orders", (req, res) => {
  Order.find()
    .then((orders) => {
      if (orders.length !== 0) {
        res.json(orders);
      } else {
        res.status(404).send("Orders not found");
      }
    })
    .catch((err) => {
      res.status(500).send("Internal Server Error!");
    });
});

// get one order by id
app.get("/order/:id", (req, res) => {
  Order.findById(req.params.id)
    .then((order) => {
      if (order) {
        res.json(order);
      } else {
        res.status(404).send("Orders not found");
      }
    })
    .catch((err) => {
      res.status(500).send("Internal Server Error!");
    });
});

// get all order for one restaurant
app.get("/restaurantorders/:id", (req, res) => {
  console.log(req.params.id)
  Order.find({ "restaurant_id": req.params.id})
    .then((orders) => {
      if (orders.length !== 0) {
        res.json(orders);
      } else {
        res.status(404).send("Orders not found");
      }
    })
    .catch((err) => {
      res.status(500).send("Internal Server Error!");
    });
});

// delete one order by id
app.delete("/order/:id", (req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then((order) => {
      if (order) {
        res.json("Order deleted Successfully!");
      } else {
        res.status(404).send("Order Not found!");
      }
    })
    .catch((err) => {
      res.status(500).send("Internal Server Error!");
    });
});

// update one order by id
app.put("/order/update/:id", (req, res) => {
  const update = {
    $set: {
      id: req.body.id,
      restaurant_id: req.body.restaurant_id,
      user_id: req.body.user_id,
      deliver_id: req.body.deliver_id,
      date: req.body.date,
      address: req.body.address,
      products: req.body.products,
      totalPrice: req.body.totalPrice,
      status: req.body.status,
    },
  };
  try {
    Order.findByIdAndUpdate(req.params.id, update)
    .then((order) => {
      if (order) {
        res.json(order);
      } else {
        res.status(404).send("Orders not found");
      }
    })
    .catch((err) => {
      res.status(500).send("Internal Server Error!");
    });
  } catch(e) {
    console.log(e)
  }
  
});

// PORT
app.listen(port, () => {
  console.log(`Up and Running on port ${port} - This is Order service`);
});