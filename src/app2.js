//Feature 1
function formatTime(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novvember",
    "December",
  ];
  let month = months[date.getMonth()];
  let dates = date.getDate();
  let year = date.getFullYear();
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day}, ${month} ${dates} ${year} | ${hour}:${minutes}`;
}
let currentDate = document.querySelector("#today-date");
let currentTime = new Date();
currentDate.innerHTML = formatTime(currentTime);
//Feature 2
function getCityName(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-name");
  let currentCityName = document.querySelector("#city");
  cityName.innerHTML = `${currentCityName.value}`;
}
let inputCity = document.querySelector("#city-input");
inputCity.addEventListener("submit", getCityName);
//Feature 3
let celsiusUnit = document.querySelector("#celsius-unit");
let fahrenheitUnit = document.querySelector("#fahrenheit-unit");
function fahrenheitTemp(event) {
  event.preventDefault();
  let tempNumCelsius = Number(document.querySelector("#temp-num"));
  let tempNumFahrenheit = Math.round((tempNumCelsius * 9) / 5 + 32);
  tempNumCelsius.innerHTML = `${tempNumFahrenheit}`;
}
fahrenheitUnit.addEventListener("click", fahrenheitTemp);

function celsiusTemp(event) {
  event.preventDefault();
  let tempNumCelsius = document.querySelector("#temp-num");
}
celsiusUnit.addEventListener("click", celsiusTemp);

let apiKey = "217895888a8a82d7a319bd5f397a4ae3";
let city = "Sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureDisplay =document.querySelector(#temp-num)
  temperatureDisplay.innerHTML=`${temperature}`}
axios.get(apiUrl).then(showTemperature);
