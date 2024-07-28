const fs = require("fs");
const path = "activefires.csv";

// Get coordinates of firesS
fs.readFile(path, "utf8", (err, data) => {
    if(err) {
        console.error("Error while reading:", err);
        return;
    }

    const lines = data.split("\n");
    const coordinates = [];

    lines.forEach((line) => {
        const feilds = line.split(",");

        const lat = parseFloat(feilds[2]);
        const lon = parseFloat(feilds[3]);
        const latAndLon = [lat, lon];

        coordinates.push(latAndLon);
    });

    coordinates.shift();
    //console.log(coordinates);

});

// Add coordinates of fires to map
for (var i=0; i < coordinates.length; i++) {
    L.marker([coordinates[i][0], coordinates[i][1]]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
}