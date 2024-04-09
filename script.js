//! Selecting elements
const regionSelector = document.querySelector(".region-selector");
const input = document.getElementById("myInput");

const getCountriesdata = function (countryName) {
  const request = fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      const countriesData = data[0];
      regionSelector.insertAdjacentHTML(
        "afterend",
        `    <div class="countries-section">
        <div class="country-map"> <img src=${countriesData.flags.png}></div>
        <div class="country-name">${countriesData.name.common}</divs.png>
        <div class="population">${countriesData.population}</div>
        <div class="region">${countriesData.region}</div>
        <div class="capital">${countriesData.capital}</div>
      </div>`
      );
    });
};

input.onsearch = () => {
  getCountriesdata(input.value);
};
const loadDefaultCountries = function (countryName) {
  const request = fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      const countriesData = data[0];
      regionSelector.insertAdjacentHTML(
        "afterend",
        `    <div class="countries-section">
        <div class="country-map"> <img src=${countriesData.flags.png}></div>
        <div class="country-name">${countriesData.name.common}</divs.png>
        <div class="population">${countriesData.population}</div>
        <div class="region">${countriesData.region}</div>
        <div class="capital">${countriesData.capital}</div>
      </div>
      `
      );
    });
};

let countryName;

const randomCountryPicker = () => {
  return fetch(`https://restcountries.com/v3.1/all?fields=name`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const hello = data[Math.floor(Math.random() * data.length)].name.common;
      loadDefaultCountries(hello);
    });
};

for (var i = 0; i < 10; i++) {
  randomCountryPicker();
}
