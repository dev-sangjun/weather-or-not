import React from "react";
import styled from "styled-components";

const Background = props => {
  const { className } = props;
  return <div className={className}></div>;
};

export default styled(Background)`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
`;
