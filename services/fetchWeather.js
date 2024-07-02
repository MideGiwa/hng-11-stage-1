const axios = require("axios");
const apikey = "965d013d760e3900578211c340d1eb17";

const fetchWeather = async function (city) {
  const response = await axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    )
    .catch((error) => {
      console.error("Error fetching the weather data:", error);
    });
  const temp = response?.data?.main?.temp;
  return temp;
};

module.exports = {
  fetchWeather,
};
