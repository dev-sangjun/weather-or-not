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
      <NavItems>
        <SearchBox className="search-box" />
        <Link to="/">
          <MdFavorite />
        </Link>
      </NavItems>
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
  a {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.5em;
    color: white;
  }
`;

export default styled(Navbar)`
  width: 100%;
  padding: 0.5rem;
  color: white;
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search-box {
    margin-right: 0.5rem;
  }
`;
