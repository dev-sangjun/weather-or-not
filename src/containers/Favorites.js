import React, { useEffect } from "react";
import styled from "styled-components";
import isEmpty from "is-empty";
import { useSelector, useDispatch } from "react-redux";
import { WeatherCard } from "../components";
import { removeFromFavorites, updateFavorite } from "../reducers";
import { getWeather } from "../api";
import { roundTemp } from "../utils";
const Favorites = props => {
  const { className } = props;
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  const onDelete = e => {
    const { lat, lon } = e.target.dataset;
    dispatch(removeFromFavorites({ lat, lon }));
  };
  const renderEmptyMessage = () => (
    <h2 className="empty-msg">
      Please add your favorite city to check the weather.
    </h2>
  );
  const renderFavorites = () => (
    <div className="weather-card-container">
      {favorites.map(favorite => (
        <WeatherCard
          key={`${favorite.lat}.${favorite.lon}`}
          className="weather-card"
          weather={favorite}
          onFavoriteClick={onDelete}
        />
      ))}
    </div>
  );
  const updateFavorites = () => {
    favorites.map(async favorite => {
      const coordinates = { lat: favorite.lat, lon: favorite.lon };
      try {
        const res = await getWeather(coordinates);
        dispatch(
          updateFavorite({
            ...favorite,
            temp: roundTemp(res.data.current.temp),
            temp_min: roundTemp(res.data.daily[0].temp.min),
            temp_max: roundTemp(res.data.daily[0].temp.max),
            description: res.data.current.weather[0].description,
            icon: res.data.current.weather[0].icon,
          })
        );
      } catch (e) {
        console.log(e);
      }
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      updateFavorites();
    }, 1200000);
    return () => clearInterval(interval);
  });
  return (
    <div className={className}>
      <h1>Favorites</h1>
      {isEmpty(favorites) ? renderEmptyMessage() : renderFavorites()}
    </div>
  );
};

export default styled(Favorites)`
  min-height: 15rem;
  /* background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px); */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  color: white;
  .empty-msg {
    color: rgba(255, 255, 255, 0.8);
    margin: 1rem 0 0 1rem;
  }
  .weather-card-container {
    flex: 1;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    flex-flow: row wrap;
    height: 15rem;
    max-height: 26rem;
    overflow-y: scroll;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    .weather-card {
      flex: calc(25% - 1rem);
      max-width: calc(25% - 1rem);
    }
  }
`;
