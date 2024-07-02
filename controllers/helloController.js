const { fetchWeather } = require("../services/fetchWeather");
const { getCity } = require("../services/getCity");

const hello = async (req, res) => {
  const { visitor_name } = req.query;
  const clientIP =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const city = await getCity(clientIP) || 'New York';
  const temp = await fetchWeather(city);
  return res.json({
    client_ip: clientIP,
    location: city,
    greeting: `Hello ${visitor_name}!, the temperature is ${temp} degrees Celcius in ${city}`,
  });
};
module.exports = {
  hello,
};
