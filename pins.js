fetch('https://cwfis.cfs.nrcan.gc.ca/geoserver/public/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=public:hotspots_last24hrs&maxFeatures=100000&outputFormat=JSON')
    .then(response => response.json())
    .then(jsonData => {
        const mydata = jsonData;
        for (let i=0; i<mydata["features"].length; i++) {
            let wildFire = mydata.features[i].properties;
    
            pin = L.circleMarker([wildFire.lat, wildFire.lon], {
                radius: 5
            }).addTo(map)
            .bindPopup(`Started ${wildFire.rep_date}`, {autoPan: false}) 
            pin.setStyle({color: 'red'});
        }

    })
    .catch(error => console.error('Error fetching the JSON data:', error));