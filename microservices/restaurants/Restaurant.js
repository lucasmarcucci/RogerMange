const mongoose = require('mongoose');


const articlesSchema = mongoose.Schema({
  article_image: {
     type: String,
     require: false
  },
  article_name: {
      type: String,
      require: false
  },
  article_price: {
    type: Number,
    require: false
  },
  article_category: {
    type: String,
    require: false
  },
  article_description: {
    type: String,
    require: false
  }
})

const restaurantSchema = mongoose.Schema({
    id_restaurateur: {
      type: String,
      require: true
    },
   image: {
      type: String,
      require: true
   },
   name: {
       type: String,
       require: true
   },
   address: {
       type: String,
       require: true
   },
   articles: [articlesSchema]
    
})

const Restaurant = mongoose.model("restaurant", restaurantSchema);

module.exports = Restaurant;