// Connect
require("./mongo-init");
// require("node-fetch")

const axios = require("axios");

async function get_restaurants() {
  try {
    const response_restaurant = await axios.get(
      "http://localhost:3020/restaurants"
    );

    restaurants = response_restaurant.data;

    const response_python = await axios.post(
        "http://localhost:5000/coordinates", restaurants
      );
    console.log(response_python)

    // restaurants.forEach(element => {
    //     address = element["address"]
    //     console.log(address)
    //     getCoordinates(address)
    // });

  } catch (error) {
      console.log(error)
  }
} 
  
get_restaurants()

// var map = L.map("map").setView([37.761566, -122.452161], 12);
// L.tileLayer(
//   "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
//   {
//     maxZoom: 20,
//     attribution:
//       '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
//   }
// ).addTo(map);



// var marker = L.marker([51.5, -0.09]).addTo(map);
// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);
// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");
