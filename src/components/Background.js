import React from "react";
import styled from "styled-components";

const Background = props => {
  const { className } = props;
  return <div className={className}></div>;
};

export default styled(Background)`
  height: 100%;
  background: url(${props => props.image}) no-repeat center center fixed;
  background-size: cover;
`;
