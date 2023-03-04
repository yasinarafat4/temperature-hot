// DO NOT SHOW API KEY LIKE THIS
const API_KEY = `73b0b3bb610d5a2a114acd1c7c7d6414`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};
const displayTemperature = (data) => {
  const temperature = document.getElementById("temperature");
  console.log(data.main.temp);
  temperature.innerText = data.main.temp;
};
loadTemperature("dhaka");
