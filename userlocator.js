// Define map variable in a higher scope
var map;

function hello(){
    console.log("Hello")
}

// Get location of user
navigator.geolocation.getCurrentPosition(function(location) {
    var lat = location.coords.latitude;
    var lon = location.coords.longitude;
    console.log(lat, lon);

    // Creating map options
    var mapOptions = {
        center: [lat, lon],
        zoom: 7
    }

    // Creating a map object
    map = new L.map("map", mapOptions);
    map.whenReady(loadData)
    // Creating a Layer object
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    // map.on("load", loadData)
    
    // Adding layer to the map
    map.addLayer(layer);

    // Add marker to user location
    var marker = L.marker([lat, lon]).addTo(map);

    // Import the necessary classes from leaflet-geosearch
    const { GeoSearchControl, OpenStreetMapProvider } = window.GeoSearch;

    // Initialize the search provider
    const provider = new OpenStreetMapProvider();

    // Add the search control to the map
        const searchControl = new GeoSearchControl({
            provider: provider,
            style: 'bar', // Optional: 'button' or 'bar'
            autoComplete: true, // Enable autocomplete
            autoCompleteDelay: 250, // Delay for autocomplete
            showMarker: true, // Show marker at the search result location
            retainZoomLevel: false, // Retain the current zoom level
            animateZoom: true, // Animate the zoom
            keepResult: true // Keep the search result visible
        });


    map.addControl(searchControl);
    map.addControl(new L.Control.Fullscreen());

}, error => {
    alert("Location not found. Please enable Location Access.")
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

     // Import the necessary classes from leaflet-geosearch
     const { GeoSearchControl, OpenStreetMapProvider } = window.GeoSearch;

     // Initialize the search provider
     const provider = new OpenStreetMapProvider();
 
     // Add the search control to the map
         const searchControl = new GeoSearchControl({
             provider: provider,
             style: 'bar', // Optional: 'button' or 'bar'
             autoComplete: true, // Enable autocomplete
             autoCompleteDelay: 250, // Delay for autocomplete
             showMarker: true, // Show marker at the search result location
             retainZoomLevel: false, // Retain the current zoom level
             animateZoom: true, // Animate the zoom
             keepResult: true // Keep the search result visible
         });
 
 
     map.addControl(searchControl);
     map.addControl(new L.Control.Fullscreen());



}, {
    timeout: 10000,
    maximumAge: 1000,
    enableHighAccuracy: true
});

