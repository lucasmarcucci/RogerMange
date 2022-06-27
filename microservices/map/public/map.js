const map = L.map("map").setView([37.77621445, -122.4084399], 15);
const attribution =
  '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
const tileUrl =
  "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

var bigIcon = L.icon({
    iconUrl:      "point.png",
    iconSize:     [40, 50], // size of the icon
});

// GET POINT
getData();

async function getData() {
  const response = await fetch("/getpoint");
  const data = await response.json();

  data.forEach((element) => {
    var marker = L.marker([element["latitude"], element["longitude"]], {icon: bigIcon}).addTo(map);
    popupContent = "<p class='myCenter'><b><span class='myBig'>" + element["name"] + "</span></b><br><span class='myMiddle'>" + element["address"] + "</span><br><br><span class='myLittle'><a href='http://localhost:3020/restaurant/" +element["_id"]+ "'>go to the restaurant !</a></span><p>"
    marker.bindPopup(popupContent).openPopup();
  });
  console.log(data);
}
