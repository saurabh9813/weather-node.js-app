const request = require('request')
//My access_token = pk.eyJ1Ijoic2F1cmFiaDk4MTMiLCJhIjoiY2twOXhnZTJ6MG9kejMxbnhndGZzaWo0bSJ9.4nNZGNM13mNsxC2B-l41yw

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2F1cmFiaDk4MTMiLCJhIjoiY2twOXhnZTJ6MG9kejMxbnhndGZzaWo0bSJ9.4nNZGNM13mNsxC2B-l41yw&limit=1'

    request({ url, json: true }, (error, { body } = {}) => {                
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if(typeof body !== 'object'){
            callback('You have entered invalid location. Try another search.', undefined)
        } 
        else if (body.features.length === 0) {            
            callback('Unable to find location. Try another search.', undefined)
        } else {            
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode