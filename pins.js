var mydata = JSON.parse(data);

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
    [-139.06, 48.30, -114.03, 60.00]: "bc",
    "on": [-95.16, 41.66, -74.34, 56.86],
    "nt": [-136.44, 60.00, -101.98, 78.76],
    "qc": [-79.76, 44.99, -57.10, 62.59],
    "Manitoba": [-102.03, 48.99, -88.94, 60.00],
    "Saskatchewan": [-109.99, 48.99, -101.36, 60.00],
    "Alberta": [-120.00, 48.99, -109.99, 60.00],
    "Yukon":  [-141.00, 60.00, -123.81, 69.65],
    "Newfoundland and Labrador": [-67.80, 46.61, -52.61, 60.37, -61.50, 47.18, -60.13, 47.80],
    "Prince Edward Island": [-64.41, 45.95, -61.97, 47.06],
    "Nova Scotia": [-66.32, 43.42, -59.68, 47.03],
    "New Brunswick": [-69.06, 44.60, -63.77, 48.07],
    "Nunavut": [ -120.68, 51.64, -61.08, 83.11],
}

function loadData() {

    //Create pins of all active fires in users province (must comment Canada active fire pins first)
    
    //Determine province of user
    var user_province = "";
    for(let i=0; i < provinces.length; i++) {
        if (lat >= provinces[i][0] && lat <= provinces[i][2]) {
            if (lon >= provinces[i][1] && lat <= provinces[i][3]) {
                user_province = provinces[[provinces[i][0], provinces[i][1], provinces[i][2], provinces[i][3]]];
                break;
            }
        }
    }

    for (let i=0; i < mydata.length; i++) {
        let wildFire = mydata[i]

<<<<<<< HEAD
        if (user_province == wildFire.agency) {
            pin = L.circleMarker([wildFire.lat, wildFire.lon], {
                radius: 5
            }).addTo(map)
            .bindPopup(`${wildFire.firename}, in ${province_name[wildFire.agency]}.\nStarted ${wildFire.startdate} ${wildFire.timezone}.\nHectares:${wildFire.hectares}\nStage of Control:${wildFire.stage_of_control}\nResponse Type:${wildFire.response_type}`) 
            .openPopup();
            pin.setStyle({color: 'red'});
        }
=======
        pin = L.circleMarker([wildFire.lat, wildFire.lon], {
            radius: 5
        }).addTo(map)
        .bindPopup(`${wildFire.firename}, in ${province_name[wildFire.agency]}`, {autoPan: false})
        .openPopup();
        pin.setStyle({color: 'red'});
>>>>>>> 8a0927d77472b7fde08232ddb4558cc70c940a50
    }

    //Create pins of all active fires in Canada (must comment province active fire pins first)
    // for (let i=0; i<mydata.length; i++) {
    //     let wildFire = mydata[i]

    //     pin = L.circleMarker([wildFire.lat, wildFire.lon], {
    //         radius: 5
    //     }).addTo(map)
    //     .bindPopup(`${wildFire.firename}, in ${province_name[wildFire.agency]}.\nStarted ${wildFire.startdate} ${wildFire.timezone}.\nHectares: ${wildFire.hectares}\nStage of Control: ${wildFire.stage_of_control}\nResponse Type: ${wildFire.response_type}`) 
    //     .openPopup();
    //     pin.setStyle({color: 'red'});
    // }
}
