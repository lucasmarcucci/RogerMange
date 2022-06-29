const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  restaurant_id: {
    type: String,
    require: true,
  },
  user_id: {
    type: String,
    require: true,
  },
  deliver_id: {
    type: String,
    require: false,
  },
  date: {
    type: Date,
    require: true,
  },
  address: {
    type: String,
    equire: true,
  },
  products: {
    type: Array,
    equire: true,
  },
  totalPrice: {
    type: Number,
    equire: true,
  },
  status: {
    type: Number,
    equire: true,
  },
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;