//Import fs (file system) Module of Node.js
const fs = require("fs");
//Path to data
const path = "activefires.csv";

//Initialize coordinate list
const coordinates = [];

///Get coordinates of fires
//Read the data file
fs.readFile(path, "utf8", (err, data) => {

    //If error occurs when reading the data, print error and stop reading.
    if(err) {
        console.error("Error while reading:", err);
        return;
    }

    //Otherwise split data into lines
    const lines = data.split("\n");

    //Get coordinate info (latitude and longitude) from current data line
    lines.forEach((line) => {
        
        //Split data line into feilds
        const feilds = line.split(",");

        //Get lat and lon, convert them to float
        const lat = parseFloat(feilds[2]);
        const lon = parseFloat(feilds[3]);
        const latAndLon = [lat, lon];

        //Add coordinates to list
        coordinates.push(latAndLon);
    });

    //Remove headers
    coordinates.shift();
    console.log(coordinates);
});


L.marker([coordinates[1][0], coordinates[1][1]]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

    // Add coordinates of fires to map
    //for (var i=0; i < coordinates.length; i++) {
        //L.marker([coordinates[i][0], coordinates[i][1]]).addTo(map)
            //.bindPopup('A pretty CSS popup.<br> Easily customizable.')
            //.openPopup();
    //}