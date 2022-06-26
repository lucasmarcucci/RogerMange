const mongoose = require('mongoose');


const articlesSchema = mongoose.Schema({
  article_id: {
    type: String,
    require: false
  },
  article_image: {
     type: String,
     require: false
  },
  article_name: {
      type: String,
      require: false
  },
  article_price: {
    type: String,
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
   },
   articles: [articlesSchema]
    
})

const Restaurant     = mongoose.model("restaurant", restaurantSchema);

module.exports = Restaurant;