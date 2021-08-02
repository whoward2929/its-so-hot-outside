const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=38602c12a2e878f363bc2c299a434e63&units=imperial"
const forecastUrl = "https://api.openweathermap.org/data/2.5/onecall?&appid=38602c12a2e878f363bc2c299a434e63"

function submitSearch() {
  const city = document.getElementById('q').value
  const currentRequest = `${currentWeatherUrl}&q=${city}`

  let lat, lon

  fetch(currentRequest)
    .then(response => response.json())
    .then(weatherData => {
      document.getElementById('city').innerHTML = `${weatherData.name}(${Date.now()})`
      document.getElementById('temp').innerHTML = `Temp ${weatherData.main.temp}`
      document.getElementById('wind').innerHTML = `Wind ${weatherData.wind.speed}`
      document.getElementById('humidity').innerHTML = `Humidity ${weatherData.main.humidity}`
      // document.getElementById('uvIndex').value = ''
      console.log(encodeURIComponent(weatherData.coord.lon))

      const encodedURL = encodeURI(`${forecastUrl}&lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}}`)

      fetch(encodedURL)
      .then(response => response.json())
      .then(forecastData => console.log(forecastData))
  })
}