var mydata = JSON.parse(data);

const provinces = {
    "bc": "British Columbia",
    "on": "Ontario",
    "nt": "Northwest Territories",
    "qc": "Qubec",
    "mb": "Manitoba",
    "sk": "Saskatchewan",
    "ab": "Alberta",
    "yt": "Yukon",
    "nl": "Newfoundland and Labrador",
    "pe": "Prince Edward Island",
    "ns": "Nova Scotia",
    "nb": "New Brunswick",
    "nu": "Nunavut",
}

function loadData() {
    for (let i=0; i<mydata.length; i++){
        let wildFire = mydata[i]

        L.circleMarker([wildFire.lat, wildFire.lon], {
            radius: 5
        }).addTo(map)
        .bindPopup(`${wildFire.firename}, in ${provinces[wildFire.agency]}`) 
        .openPopup();
        // L.marker([wildFire.lat, wildFire[i].lon]).addTo(map)
        // .bindPopup(`${wildFire.firename}, in ${wildfire.agency}`) 
        // .openPopup();
    }
}
