import React from "react";
import styled from "styled-components";
import { WeatherCard } from "../components";
const Weather = props => {
  const { className } = props;
  return (
    <div className={className}>
      <WeatherCard
        className="weather-card"
        city="San Francisco"
        weather="Sunny"
      />
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
