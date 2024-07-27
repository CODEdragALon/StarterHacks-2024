// get location of user
navigator.geolocation.getCurrentPosition(function(location) {
    var lat = location.coords.latitude;
    var lon = location.coords.longitude;
    console.log(lat, lon);

    // Creating map options
    var mapOptions = {
    center: [lat, lon],
    zoom: 10
    }

    // Creating a map object
    var map = new L.map("map", mapOptions);

    // Creating a Layer object
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    
    // Adding layer to the map
    map.addLayer(layer);
});