var mydata = JSON.parse(data);

fetch('https://cwfis.cfs.nrcan.gc.ca/geoserver/public/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=public:hotspots_last24hrs&maxFeatures=100000&outputFormat=JSON')
    .then(response => response.json())
    .then(jsonData => {
        mydata = JSON.parse(jsonData);
        loadData();
    })
    .catch(error => console.error('Error fetching the JSON data:', error));


const province_name = {
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

const provinces = {
    "bc": [-139.06, 48.30, -114.03, 60.00],
    "on": [-95.16, 41.66, -74.34, 56.86],
    "nt": [-136.44, 60.00, -101.98, 78.76],
    "qc": [-79.76, 44.99, -57.10, 62.59],
    "mb": [-102.03, 48.99, -88.94, 60.00],
    "sk": [-109.99, 48.99, -101.36, 60.00],
    "ab": [-120.00, 48.99, -109.99, 60.00],
    "yt": [-141.00, 60.00, -123.81, 69.65],
    "nl": [-67.80, 46.61, -52.61, 60.37, -61.50], 
    "nl": [47.18, -60.13, 47.80],
    "pe": [-64.41, 45.95, -61.97, 47.06],
    "ns": [-66.32, 43.42, -59.68, 47.03],
    "nb": [-69.06, 44.60, -63.77, 48.07],
    "nu": [ -120.68, 51.64, -61.08, 83.11],
}

function loadData() {

    ///Create pins of all active fires in users province (must comment Canada active fire pins first)
    //Determine province of user
    // let user_province = null;
    // const keys = Object.keys(provinces);

    // for(let i=0; i < keys.length; i++) {
    //     const ranges = provinces[keys[i]];
    //     if (lat >= ranges[0] && lat <= ranges[2] && lon >= ranges[1] && lat <= ranges[3]) {
    //         user_province = keys[i];
    //         break;
    //     }
    // }

    // //Create pins
    // for (let i=0; i < mydata.length; i++) {
    //     let wildFire = mydata[i]

    //     if (user_province == wildFire.agency) {
    //         pin = L.circleMarker([wildFire.lat, wildFire.lon], {
    //             radius: 5
    //         }).addTo(map)                                                                                                                                                                                                                                                                     
    //         .bindPopup(`${wildFire.firename}, in ${province_name[wildFire.agency]}.\nStarted ${wildFire.startdate} ${wildFire.timezone}.\nHectares:${wildFire.hectares}\nStage of Control:${wildFire.stage_of_control}\nResponse Type:${wildFire.response_type}`, {autoPan: false}) 
    //         pin.setStyle({color: 'red'});
    //     }
    // }

    ///Create pins of all active fires in Canada (must comment province active fire pins first)
    for (let i=0; i<mydata.length; i++) {
        let wildFire = mydata[i]

        pin = L.circleMarker([wildFire.lat, wildFire.lon], {
            radius: 5
        }).addTo(map)
        .bindPopup(`${wildFire.firename}, in ${province_name[wildFire.agency]}.\nStarted ${wildFire.startdate} ${wildFire.timezone}.\nHectares: ${wildFire.hectares}\nStage of Control: ${wildFire.stage_of_control}\nResponse Type: ${wildFire.response_type}`, {autoPan: false}) 
        pin.setStyle({color: 'red'});
    }
}
