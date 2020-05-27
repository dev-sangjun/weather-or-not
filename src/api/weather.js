import axios from "axios";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const getWeather = coordinates => {
  const url = `http://api.openweathermap.org/data/2.5/onecall`;
  const { lon, lat } = coordinates;
  const config = {
    params: {
      lat,
      lon,
      units: "metric",
      exclude: "hourly",
      appid: API_KEY,
    },
  };
  return axios.get(url, config);
};
