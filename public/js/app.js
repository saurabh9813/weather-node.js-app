const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const loader = document.querySelector('#loader')
const table = document.querySelector("#output_table");

const area = document.querySelector('#area')
const city = document.querySelector('#city')
const country = document.querySelector('#country')
const wind_speed = document.querySelector('#wind_speed')
const precipitation = document.querySelector('#precipitation')
const weather_description = document.querySelector('#weather_description')
const temp = document.querySelector('#temp')
const humidity = document.querySelector('#humidity')
const feelslike = document.querySelector('#feelslike')

table.style.visibility = 'hidden';

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    
    loader.textContent = 'Loading...'
    table.style.visibility = 'hidden';

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {            
            if (data.error) {
                loader.textContent = data.error
            } else {
                loader.textContent = "Area found for your query: " + data.location
                area.textContent = data.forecast.place
                city.textContent = data.forecast.region 
                country.textContent = data.forecast.country
                wind_speed.textContent = data.forecast.wind_speed + " Km/Hr"
                precipitation.textContent = data.forecast.precipitation + "%"
                weather_description.textContent = data.forecast.weather_description
                temp.textContent = data.forecast.temperature + " " + temp.textContent.substr(temp.textContent.length-1, 1);
                humidity.textContent = data.forecast.humidity + "%"
                feelslike.textContent = data.forecast.feels_like + " " + feelslike.textContent.substr(feelslike.textContent.length-1, 1);
                table.style.visibility = 'visible';
            }
        })
    })
})