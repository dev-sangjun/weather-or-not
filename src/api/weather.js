import axios from "axios";

export const getWeather = ({ lat, lon }) => {
  const url = "https://weather-or-not-server.herokuapp.com/weather";
  const config = {
    params: {
      lat,
      lon,
    },
  };
  return axios.get(url, config);
};
