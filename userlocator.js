// Define map variable in a higher scope
var map;
// create Map
var mapOptions = {
    center: [53, -127],
    zoom: 5
}
// Creating a map object
map = new L.map("map", mapOptions);
// Creating a Layer object
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
// Adding layer to the map
map.addLayer(layer);
// Define newZoom variable
const newZoom = 10;

// Get location of user
navigator.geolocation.getCurrentPosition(function(location) {
    const newLat = location.coords.latitude;
    const newLon = location.coords.longitude;
    map.setView([newLat, newLon], newZoom);

}, error => {
    alert("Location not found. Please enable Location Access.");

}, {
    timeout: 10000,
    maximumAge: 1000,
    enableHighAccuracy: false
});

