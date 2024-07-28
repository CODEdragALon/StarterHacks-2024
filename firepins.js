const path = "activefires.csv";

fetch(path)
    .then(response => response.text())
    .then(data => {
        const lines = data.split("\n");
        const coordinates = [];

        lines.forEach((line) => {
            const fields = line.split(",");

            const lat = parseFloat(fields[2]);
            const lon = parseFloat(fields[3]);
            const latAndLon = [lat, lon];

            coordinates.push(latAndLon);
        });

        coordinates.shift(); // Remove header if present

        // Add coordinates of fires to map
        coordinates.forEach((latAndLon) => {
            var marker = L.marker(latAndLon).addTo(map);
            marker.bindPopup('A pretty CSS popup.<br> Easily customizable.');
            marker.openPopup();
        });
    })
    .catch(err => {
        console.error("Error while reading:", err);
    });