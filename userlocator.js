// Define map variable in a higher scope
var map;

// Function to relocate user based on input
function userRelocate(event) {
    event.preventDefault();
    var locationInput = document.getElementById('location').value;
    // Assuming you have a function to get coordinates from the location input
    var coordinates = getCoordinatesFromLocation(locationInput);
    if (coordinates) {
        map.panTo(new L.LatLng(coordinates.lat, coordinates.lng));
    }
}

// Get location of user
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
    map = new L.map("map", mapOptions);

    // Creating a Layer object
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    
    // Adding layer to the map
    map.addLayer(layer);
});

// Dummy function to simulate getting coordinates from a location
// Replace this with actual implementation
function getCoordinatesFromLocation(location) {
    return { lat: 0, lng: 0};
}

// Add event listener to the form submission
var form = document.querySelector('form[name="location_requested"]');
if (form) {
    form.addEventListener('submit', userRelocate);
} else {
    console.error('Form not found');
}
