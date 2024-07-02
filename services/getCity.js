const { default: axios } = require("axios");

const getCity = async (ip) => {
  const apiKey = "840bde797dc4bf";
  const url = `https://ipinfo.io/${ip}?token=${apiKey}`;

  try {
    const response = await axios.get(url);
    const { city } = response.data;
    console.log(response);
    return city;
  } catch (error) {
    console.log("Error:", error);
  }
};

module.exports = {
  getCity,
};
