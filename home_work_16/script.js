console.log("weatherAPP");

const cityGeo = document.getElementById("city");
const latitudeGeo = document.getElementById("latitude");
const longitudeGeo = document.getElementById("longitude");

const weathercodeGeo = document.getElementById("weathercode");
const windspeedGeo = document.getElementById("windspeed");
const temperatureGeo = document.getElementById("temperature");
const winddirectionGeo = document.getElementById("winddirection");
const descriptionGeo = document.getElementById("description");

async function getWeather() {
  const resp = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const respObj = await resp.json();

  const { city, latitude, longitude } = respObj;
  console.log(city, latitude, longitude);

  cityGeo.innerText += " " + respObj.city;
  latitudeGeo.innerText += " " + respObj.latitude;
  longitudeGeo.innerText += " " + respObj.longitude;

  const climate = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const climateObj = await climate.json();
  const { current_weather } = climateObj;

  const { windspeed, temperature, winddirection, weathercode } =
    current_weather;

  console.log(windspeed, temperature, winddirection, weathercode);

  const description = getWeatherByCode(weathercode);

  // weathercodeGeo.innerText += (" " + weathercode);
  windspeedGeo.innerText += (" " + windspeed);
  temperatureGeo.innerText += (" " + temperature);
  winddirectionGeo.innerText += (" " + winddirection);
  descriptionGeo.innerText += (" " + description);

function getWeatherByCode(code) {
    switch (code) {
      case 0:
        return "Clear sky";
      case (1, 2, 3):
        return "Mainly clear, partly cloudy, and overcast";
      case (45, 48):
        return "Fog and depositing rime fog";
      case (51, 53, 55):
        return "Drizzle: Light, moderate, and dense intensity";
      case (56, 57):
        return "Freezing Drizzle: Light and dense intensity";
      case (61, 63, 65):
        return "Rain: Slight, moderate and heavy intensity";
      case (66, 67):
        return "Freezing Rain: Light and heavy intensity";
      case (71, 73, 75):
        return "Snow fall: Slight, moderate, and heavy intensity";
      case 77:
        return "Snow grains";
      case (80, 81, 82):
        return "Rain showers: Slight, moderate, and violent";
      case (85, 86):
        return "Snow showers slight and heavy";
      case 95:
        return "Thunderstorm: Slight or moderate";
      case (96, 99):
        return "Thunderstorm with slight and heavy hail";
      default:
        return "Unknown";
    }
  };
}

getWeather();
