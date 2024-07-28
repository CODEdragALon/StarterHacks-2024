var mydata = JSON.parse(data);

const provinces = {
    "bc": "British Columbia",
    "on": "Ontario",
    "nt": "Northwest Territories",
    "qc": "Quebec",
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

        pin = L.circleMarker([wildFire.lat, wildFire.lon], {
            radius: 5
        }).addTo(map)
        .bindPopup(`${wildFire.firename}, in ${provinces[wildFire.agency]}`) 
        .openPopup();
        pin.setStyle({color: 'red'});
    }
}
