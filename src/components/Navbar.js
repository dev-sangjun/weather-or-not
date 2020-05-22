import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { SearchBox } from "../components";

const Navbar = props => {
  const { className } = props;
  return (
    <nav className={className}>
      <Logo>W/N</Logo>
      <NavItems></NavItems>
    </nav>
  );
};

const Logo = styled.div`
  color: white;
  user-select: none;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export default styled(Navbar)`
  width: 100%;
  padding: 0.5rem;
  color: white;
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
