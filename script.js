//! Selecting elements
const regionSelector = document.querySelector(".region-selector");
const input = document.getElementById("myInput");
const countriesSection = document.querySelector(".countries-section");

const loadDefaultCountries = function (countryName) {
  const request = fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      const countriesData = data[0];
      let counter = 1;
      const countryGen = `
        <div class="country-map">
        <img src="${countriesData.flags.png}" alt="" />
        </div>
        <div class="country-details">
          <h1 class="population">Population ${countriesData.population}</h1>
          <h1 class="region">Region:${countriesData.region}</h1>
          <h1 class="capital">Capital ${countriesData.capital}</h1>
      
      </div>
      `;
      let countryCounter = 1;
      const hi = document.createElement("div");
      hi.className = `country-${countryCounter}`;
      hi.innerHTML = countryGen;
      countriesSection.appendChild(hi);
      countryCounter = countryCounter + 1;
    });
};

const randomCountryPicker = () => {
  return fetch(`https://restcountries.com/v3.1/all?fields=name`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data[Math.floor(Math.random() * data.length)].name.common;
    })
    .then(function (i) {
      loadDefaultCountries(i);
    });
};
for (var i = 0; i < 10; i++) {
  randomCountryPicker();
}

const getCountriesdata = function (countryName) {
  const request = fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      const countriesData = data[0];

      const searchedCountry = `    <div class="countries-section">
        <div class="country-map"> <img src=${countriesData.flags.png}></div>
        <div class="country-name">${countriesData.name.common}</divs.png>
        <div class="population">${countriesData.population}</div>
        <div class="region">${countriesData.region}</div>
        <div class="capital">${countriesData.capital}</div>
      </div>`;
      let countryCounter = 1;
      const hi = document.createElement("div");
      hi.className = `country-${countryCounter}`;
      hi.innerHTML = searchedCountry;
      countriesSection.appendChild(hi);
    });
};

input.onsearch = () => {
  countriesSection.innerHTML = "";
  getCountriesdata(input.value);
};
