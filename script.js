const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=38602c12a2e878f363bc2c299a434e63"
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=38602c12a2e878f363bc2c299a434e63"

function submitSearch() {
  const city = document.getElementById('q').value
  const currentRequest = `${currentWeatherUrl}&q=${city}`
  const forecastRequest = `${forecastUrl}&q=${city}}`

  fetch(currentRequest)
    .then(response => response.json())
    .then(weatherData => console.log(weatherData))

  fetch(forecastRequest)
  .then(response => response.json())
  .then(forecastData => console.log(forecastData))
}