var mydata = JSON.parse(data);

const provinces = {
    "bc": "British Columbia",
    "on": "Ontario",
    "nt": "Nunavut",
    "qc": "Qubec",
    "mb": "Manitoba",
    "sk": "Saskachewan",
    "ab": "Alberta",
    "yt": "Yukon",

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
