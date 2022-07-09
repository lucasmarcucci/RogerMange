const map = L.map("map").setView([37.77621445, -122.4084399], 15);
// const attribution =
//   '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// const tileUrl =
//   "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
// const tiles = L.tileLayer(tileUrl, { attribution });
// tiles.addTo(map);


L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);;

var bigIcon = L.icon({
    iconUrl:      "point.png",
    iconSize:     [40, 50], // size of the icon
    popupAnchor:  [0, -40],
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
