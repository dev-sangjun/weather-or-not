import React from "react";
import styled from "styled-components";
import { WiDaySunny } from "react-icons/wi";

const WeatherCard = props => {
  const { className, city, weather } = props;
  return (
    <div className={className}>
      <div className="top-container">
        <div className="top-left-container">
          <Title>{city}</Title>
          <span>{weather}</span>
        </div>
        <WiDaySunny className="weather-icon" />
      </div>
      <div className="btm-container"></div>
    </div>
  );
};
const Title = styled.h1``;
export default styled(WeatherCard)`
  position: relative;
  overflow: hidden;
  width: 20rem;
  height: 10rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  .top-container {
    opacity: 0.9;
    color: white;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #38619d;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    .weather-icon {
      font-size: 3em;
    }
    &:before {
      z-index: -1;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10px);
    }
  }
`;
