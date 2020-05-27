import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleDegree, CELSIUS, FAHRENHEIT } from "../reducers";

const Navbar = props => {
  const { className } = props;
  const degree = useSelector(state => state.degree);
  const dispatch = useDispatch();
  const onClick = e => {
    if (degree !== e.target.dataset.degree) dispatch(toggleDegree());
  };
  const renderDegrees = () => {
    return (
      <div className="degree-container">
        <span
          className={`degree ${degree === CELSIUS && "degree-selected"}`}
          onClick={onClick}
          data-degree={CELSIUS}
        >
          &#176;C
        </span>
        <span>/</span>
        <span
          className={`degree ${degree === FAHRENHEIT && "degree-selected"}`}
          onClick={onClick}
          data-degree={FAHRENHEIT}
        >
          &#176;F
        </span>
      </div>
    );
  };
  return (
    <nav className={className}>
      <Logo>W/N</Logo>
      {renderDegrees()}
    </nav>
  );
};

const Logo = styled.div`
  color: white;
`;

export default styled(Navbar)`
  width: 100%;
  padding: 0.5rem;
  color: white;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  .degree-container {
    .degree {
      color: rgba(150, 150, 150);
      &:hover {
        cursor: pointer;
      }
    }
    .degree-selected {
      color: white;
      &:hover {
        cursor: default;
      }
    }
  }
`;
