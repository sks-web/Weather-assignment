const cityNameEl = document.querySelector(".city-name");
const descEl = document.querySelector(".desc");
const tempEl = document.querySelector(".temp");
const sectionEl = document.querySelector("#section");
const lodaerEl = document.querySelector(".loader");
const lat = document.querySelector(".lat");
const lon = document.querySelector(".lon");
const dateEl = document.querySelector(".date");

document.querySelector("#formBtn").addEventListener("click", function (e) {
  e.preventDefault();
  lodaerEl.style.display = "block";
  const city = document.querySelector("#cityInput").value;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2a838decd10ec5a74a462ba1f7798512`;

  fetch(URL, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data) {
        dateEl.textContent = new Date().toLocaleDateString();
        cityNameEl.textContent = data["name"];
        tempEl.textContent = data.main.temp;
        descEl.textContent = data.weather[0].description;
        lat.textContent = data.coord.lat;
        lon.textContent = data.coord.lon;
      }
      lodaerEl.style.display = "none";
      document.querySelector("#cityInput").value = "";
    })
    .catch((err) => {
      if (err) {
        alert("Please enter the city name");
      }
    });
});
