import React from "react";
import styled from "styled-components";
import {
  getIcon,
  getWeatherColor,
  getUTCDateWithOffset,
  convertTemp,
  getTimeString,
} from "../utils";
import { MdFavoriteBorder, MdClear } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  setKeyword,
  CELSIUS,
} from "../reducers";

const WeatherCard = props => {
  const { className, weather, onFavoriteClick } = props;
  const {
    city,
    lat,
    lon,
    timezone_offset,
    temp,
    temp_min,
    temp_max,
    description,
    icon,
    isFavorite,
  } = weather;
  const date = useSelector(state => state.date);
  const degree = useSelector(state => state.degree);
  const timeString = getTimeString(getUTCDateWithOffset(date, timezone_offset));
  const dispatch = useDispatch();
  const onClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(weather));
    } else {
      dispatch(addToFavorites(weather));
      onFavoriteClick();
      dispatch(setKeyword(""));
    }
  };
  const getDegree = tempInCelsius =>
    convertTemp(degree, tempInCelsius) + (degree === CELSIUS ? "℃" : "℉");
  return (
    <div className={className}>
      <div className="top-container">
        <div className="city-icon-container">
          <Title>{city}</Title>
          {getIcon(icon)}
        </div>
        <span className="date-text">{timeString}</span>
      </div>
      <div className="mid-container">
        <span className="cur-temp">{getDegree(temp)}</span>
        <div className="max-min-temp-container">
          <span>{getDegree(temp_max)}</span>
          <span>{getDegree(temp_min)}</span>
        </div>
      </div>
      <div className="btm-container">
        <span className="description">{description}</span>
      </div>
      <div
        className="favorite-icon-container"
        onClick={onClick}
        data-lat={lat}
        data-lon={lon}
      >
        {weather.isFavorite ? (
          <MdClear className="favorite-icon" />
        ) : (
          <MdFavoriteBorder className="favorite-icon" />
        )}
      </div>
    </div>
  );
};

const Title = styled.div`
  font-size: 1.3em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 0.5rem;
`;
export default styled(WeatherCard)`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  user-select: none;
  width: 100%;
  min-width: 13rem;
  margin: 0.5rem;
  height: 15rem;
  color: ${props => getWeatherColor(props.weather.temp).text};
  border-radius: 0.75rem;
  border: 8px solid ${props => getWeatherColor(props.weather.temp).bg};
  background-color: white;
  .top-container {
    display: flex;
    flex-direction: column;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    overflow: hidden;
    .city-icon-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 3rem;
      padding: 0.5rem 1rem;
      .weather-icon {
        min-width: 2.5rem;
        min-height: 2.5rem;
      }
    }
    .date-text {
      margin-left: 1.5rem;
    }
  }
  .mid-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    .cur-temp {
      flex: 1;
      font-size: 1.6em;
      margin-left: 0.5rem;
    }
    .max-min-temp-container {
      width: 30%;
      display: flex;
      flex-direction: column;
      text-align: center;
      span:first-child {
        border-bottom: 1px solid
          ${props => getWeatherColor(props.weather.temp).text};
        padding-bottom: 0.25rem;
        margin-bottom: 0.25rem;
      }
    }
  }
  .btm-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    overflow: hidden;
    .description {
      font-size: 1.2em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .favorite-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: #38619d;
    padding: 0.5rem;
    transition: all 100ms ease-in-out;
    .favorite-icon {
      font-size: 1.5em;
      color: #fa826b;
    }
    &:hover {
      background-color: #f0f0f0;
      cursor: pointer;
    }
  }
`;
