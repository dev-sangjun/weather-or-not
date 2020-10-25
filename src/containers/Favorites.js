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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  .empty-msg {
    color: gray;
    margin: 1rem 0 0 1rem;
  }
  .weather-card-container {
    flex: 1;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row wrap;
    height: 15rem;
    max-height: 26rem;
    padding: 1rem;
    margin-top: 1rem;
    overflow: auto;
    background-color: #f5f5f9;
    border-radius: 1rem;
    .weather-card {
      flex: calc(50% - 1rem);
      max-width: calc(50% - 1rem);
      @media (max-width: 640px) {
        flex: 1;
        max-width: 100%;
      }
    }
  }
`;
