import React, { useState, useEffect } from "react";
import styled from "styled-components";
import isEmpty from "is-empty";
import ClipLoader from "react-spinners/ClipLoader";
import { SearchBar, WeatherCard } from "../components";
import { getWeather, getPlaces } from "../api";
import { roundTemp, animations } from "../utils";

const Search = props => {
  const { className } = props;
  const [suggestions, setSuggestions] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const getSuggestions = async keyword => {
    if (!isEmpty(keyword)) {
      try {
        const res = await getPlaces(keyword);
        let places = [];
        res.data.features.map(place => places.push(place));
        setSuggestions(places);
      } catch (e) {
        console.log(e);
      }
    }
  };
  const onSuggestionClick = e => {
    const index = e.target.dataset.index;
    const [lon, lat] = suggestions[index].geometry.coordinates;
    setSuggestions([]);
    onGetWeather(e.target.innerText, { lon, lat });
  };
  const onGetWeather = async (city, coordinates) => {
    try {
      setWeatherData(null);
      setLoading(true);
      const res = await getWeather(coordinates);
      onSetWeatherData(city, res.data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  const onSetWeatherData = (city, data) => {
    setWeatherData({
      city: city.split(",")[0],
      lat: data.lat,
      lon: data.lon,
      timezone_offset: data.timezone_offset,
      temp: roundTemp(data.current.temp),
      temp_min: roundTemp(data.daily[0].temp.min),
      temp_max: roundTemp(data.daily[0].temp.max),
      description: data.current.weather[0].description,
      icon: data.current.weather[0].icon,
      isFavorite: false,
    });
  };
  const onFavoriteClick = () => {
    setWeatherData(null);
  };
  const renderLoading = () => <ClipLoader size={30} color="white" />;
  const renderWeatherCard = () =>
    weatherData ? (
      <WeatherCard weather={weatherData} onFavoriteClick={onFavoriteClick} />
    ) : (
      <span className="greeting-msg">
        Check the weather and we'll keep you updated.
      </span>
    );
  useEffect(() => {
    document.addEventListener("mousedown", e => {
      if (!e.target.classList.contains("suggestion") && !isEmpty(suggestions))
        setSuggestions([]);
    });
  });
  return (
    <div className={className}>
      <div className="search-top-container">
        <SearchBar
          className="search-bar"
          getSuggestions={getSuggestions}
          suggestions={suggestions}
          onSuggestionClick={onSuggestionClick}
        />
      </div>
      <div className="search-result">
        {loading ? renderLoading() : renderWeatherCard()}
      </div>
    </div>
  );
};

export default styled(Search)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  .search-top-container {
    position: absolute;
    z-index: 2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  .search-result {
    width: 100%;
    height: 20rem;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    .greeting-msg {
      font-size: 2.5em;
      animation: ${animations.fadeIn} 2s forwards;
      @media (max-width: 640px) {
        font-size: 2em;
      }
    }
  }
  .search-bar {
    width: 70%;
  }
`;
