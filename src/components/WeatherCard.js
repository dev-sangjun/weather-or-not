import React from "react";
import styled from "styled-components";

const WeatherCard = props => {
  const { className } = props;
  return (
    <div className={className}>
      <div className={"weather-top-container"}>
        <Title>San Francisco</Title>
        <span>Sunny</span>
      </div>
      <div className={"weather-btm-container"}></div>
    </div>
  );
};
const Title = styled.h1``;
export default styled(WeatherCard)`
  width: 20rem;
  height: 30rem;
  background-color: white;
  border-radius: 0.25rem;
  .weather-top-container {
    background-color: #38619d;
  }
`;
