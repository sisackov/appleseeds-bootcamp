const state = {
  selectedRegion: null,
  data: {},
};
const utils = {
  getTypeOfStates(type) {
    return state.data[state.selectedRegion].map((country) => {
      return country.data.latestData[type];
    });
  },
  randomColor() {
    return state.data[state.selectedRegion].map((_) => {
      let r, g, b;
      r = Math.random() * (254 - 0) + 0;
      g = Math.random() * (254 - 0) + 0;
      b = Math.random() * (254 - 0) + 0;

      return `rgb(${r},${g},${b})`;
    });
  },
  getCountryNames() {
    return state.data[state.selectedRegion].map((country) => {
      return country.name;
    });
  },
};
//constants and will never change!
const PROXY = "https://pini-proxy.herokuapp.com";
const covidBaseUrl = "https://corona-api.com";
const countriesBaseUrl = "restcountries.herokuapp.com/api/v1";

const getCovid = async () => {
  const getTargetedContinent = async (continent) => {
    state.selectedRegion = continent;
    if (!state.data.hasOwnProperty(continent) && continent !== "World") {
      const response = await fetch(
        `${PROXY}/${countriesBaseUrl}/region/${continent}`
      );
      const countries = await response.json();

      const filteredData = [];
      state.data.world.forEach((country) => {
        countries.forEach((targetedCountry) => {
          if (targetedCountry.cca2.includes(country.code)) {
            filteredData.push(country);
          }
        });
      });
      state.data[continent] = filteredData;
      console.log(state);
    }
    displayCountries();
    continentChart("confirmed");
  };

  const displayCountries = () => {
    const target = document.querySelector("ul");
    target.innerHTML = "";
    state.data[state.selectedRegion].forEach((country) => {
      const el = document.createElement("li");
      el.classList.add("list");
      el.innerHTML = country.name;
      el.addEventListener("click", () => fetchCountryDetails(country.code));
      target.appendChild(el);
    });
  };

  const fetchCountryDetails = async (code) => {
    const filteredCountry = state.data[state.selectedRegion].find((country) => {
      return country.code == code;
    });
    displayCountryDetails(filteredCountry);
  };

  const displayCountryDetails = (country) => {
    document.querySelector(".canvas-container").classList.add("none");
    document.querySelector(".options").classList.add("hidden");
    document.querySelector(".details").classList.remove("none");

    document.querySelector(".total-cases").innerHTML =
      country.data.latestData.confirmed;

    document.querySelector(".new-cases").innerHTML =
      country.data.today.confirmed;

    document.querySelector(".total-deaths").innerHTML =
      country.data.latestData.deaths;

    document.querySelector(".total-recovered").innerHTML =
      country.data.latestData.recovered;

    document.querySelector(".new-deaths").innerHTML = country.data.today.deaths;

    document.querySelector(".critical").innerHTML =
      country.data.latestData.critical;
  };

  const continentChart = (type) => {
    document.querySelector(".options").classList.remove("hidden");
    document.querySelector(".details").classList.add("none");

    const option = utils.getTypeOfStates(type);
    const names = utils.getCountryNames();
    const randomColors = utils.randomColor();

    if (document.querySelector("#myChart")) {
      document.querySelector(".canvas-container").classList.remove("none");
      document.querySelector(".canvas-container").innerHTML = "";
      const canvas = document.createElement("canvas");
      canvas.id = "myChart";
      document.querySelector(".canvas-container").appendChild(canvas);
    }

    const ctx = document.getElementById("myChart").getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: names,
        datasets: [
          {
            label: `Covid 19 ${type}`,
            backgroundColor: randomColors[0],
            borderColor: "red",
            pointBackgroundColor: randomColors,
            data: option,
          },
        ],
      },
    });
  };

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.hasAttribute("data-continent")) {
      button.addEventListener("click", (e) =>
        getTargetedContinent(e.target.getAttribute("data-continent"))
      );
    } else {
      button.addEventListener("click", (e) =>
        continentChart(e.target.getAttribute("data-type"))
      );
    }
  });
};

(async () => {
  const req = await fetch(`${covidBaseUrl}/countries`);
  const { data } = await req.json();

  const countries = [];
  data.forEach((countryData) => {
    const countryObj = {
      name: countryData.name,
      code: countryData.code,
      data: {
        today: countryData.today,
        latestData: countryData.latest_data,
      },
    };
    countries.push(countryObj);
  });
  state.data.world = countries;
  console.log(state.data);
  getCovid();
})();
