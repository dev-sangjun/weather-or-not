import axios from "axios";

export const getPlaces = city => {
  const url = `https://weather-or-not-server.herokuapp.com/geocode/${city}`;
  return axios.get(url);
};
