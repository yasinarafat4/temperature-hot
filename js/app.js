// DO NOT SHOW API KEY LIKE THIS
const API_KEY = `73b0b3bb610d5a2a114acd1c7c7d6414`;

const loadTemperature = (city) => {
  console.log(city);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

// common function for id
const setInnerTextById = (id, text) => {
  const temperature = document.getElementById(id);
  temperature.innerText = text;
};

const displayTemperature = (data) => {
  // console.log(data.main.temp);
  // const temperature = document.getElementById("temperature");
  // temperature.innerText = data.main.temp;
  setInnerTextById("temperature", data.main.temp);
  setInnerTextById("weather-condition", data.weather[0].main);

  console.log(data.weather[0].main);
};

// event listener of search button
document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const city = searchField.value;
  searchField.value = "";

  // set city
  document.getElementById("city-name").innerText = city;

  loadTemperature(city);
});

loadTemperature("dhaka");
