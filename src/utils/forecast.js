const request = require('request')
//My access_key = 102bf4e13a2368c8303dc3d8e277abf2

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=102bf4e13a2368c8303dc3d8e277abf2&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body } = {}) => {        
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            weather_data = {
                place: body.location.name,
                region: body.location.region,
                country: body.location.country,
                temperature: body.current.temperature,
                weather_description: body.current.weather_descriptions[0],
                weather_icon : body.current.weather_icons[0],
                wind_speed : body.current.wind_speed,
                precipitation: body.current.precip,
                humidity: body.current.humidity,
                feels_like: body.current.feelslike
            }            
            callback(undefined, weather_data)
        }
    })
}

module.exports = forecast