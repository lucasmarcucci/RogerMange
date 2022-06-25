const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
   restaurantID: {
     type: String,
     require: true
   },
   image: {
      type: String,
      require: true
   },
   name: {
       type: String,
       require: false
   },
   address: {
       type: String,
       require: false
   }
})

const Restaurant = mongoose.model("restaurant", restaurantSchema);

module.exports = Restaurant;