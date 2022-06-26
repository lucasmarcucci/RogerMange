const express = require('express');

// Connect
require('./mongo-init');

const Restaurant = require('./Restaurant');

const app  = express();
const port = 3000;
app.use(express.json())


// RESTAURANTS
app.post('/restaurant', (req, res) => {
    var newRestaurant = new Restaurant({
      restaurantID: req.body.restaurantID,
      image: req.body.image,
      name: req.body.name,
      address: req.body.address
    })

    newRestaurant.save().then(() => {
        res.send("Restaurant create with success !")
    }).catch((err) => {
      if(err){
        throw err
      }
    })
});

app.get('/restaurants', (req, res) => {
  Restaurant.find().then((restaurants) => {
       if (restaurants.length !== 0) {
             res.json(restaurants)
       } else {
           res.status(404).send('Restaurants not found');
      }
   }).catch((err) => {
        res.status(500).send('Internal Server Error!');
   });
});

app.get('/restaurant/:id', (req, res) => {
  Restaurant.findById(req.params.id).then((restaurant) => {
       if (restaurant) {
          res.json(restaurant)
       } else {
           res.status(404).send('Restaurants not found');
       }
    }).catch((err) => {
       res.status(500).send('Internal Server Error!');
   });
});

app.delete('/restaurant/:id', (req, res) => {
  Restaurant.findByIdAndDelete(req.params.id).then((restaurant) 	=> {
       if (restaurant) {
            res.json('Restaurant deleted Successfully!')
       } else {
           res.status(404).send('Restaurant Not found!'); 
       }
   }).catch((err) => {
        res.status(500).send('Internal Server Error!');
   });
});

app.put('/restaurants/update/:id', (req, res) => {
  const filter = {"_id": req.params.id}
  const update = {$set: {"restaurantID": req.body.restaurantID, "image":  req.body.image, "name": req.body.name, "address": req.body.address} };
  Restaurant.findByIdAndUpdate(filter, update).then((restaurant) => {
    if (restaurant) {
       res.json(restaurant)
    } else {
        res.status(404).send('Restaurants not found');
    }
 }).catch((err) => {
    res.status(500).send('Internal Server Error!');
});
});



// AERICLES
app.put('/restaurants/update/articles/:id', (req, res) => {
  const filter = {"_id": req.params.id}
  const update = {$push: {"articles": req.body.articles}};
  Restaurant.findByIdAndUpdate(filter, update).then((restaurant) => {
    if (restaurant) {
       res.json(restaurant)
    } else {
        res.status(404).send('Restaurants not found');
    }
 }).catch((err) => {
    res.status(500).send('Internal Server Error!');
});
});

app.listen(port, () => {
    console.log(`Up and Running on port ${port} - This is Restaurant service`);
})