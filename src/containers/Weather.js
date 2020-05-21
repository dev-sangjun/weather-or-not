import React from "react";
import styled from "styled-components";
import { WeatherCard } from "../components";
const Weather = props => {
  const { className } = props;
  return (
    <div className={className}>
      <WeatherCard className="weather-card" />
      <WeatherCard className="weather-card" />
      <WeatherCard className="weather-card" />
    </div>
  );
};

export default styled(Weather)`
  display: flex;
  .weather-card {
    margin-right: 0.5rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;
