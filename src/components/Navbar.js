import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
const Navbar = props => {
  const { className } = props;
  return (
    <nav className={className}>
      <Logo>W/N</Logo>
      <NavItems>
        <Link to="/">
          <MdFavorite />
        </Link>
      </NavItems>
    </nav>
  );
};

const Logo = styled.div`
  color: white;
`;

const NavItems = styled.ul`
  list-style: none;
  a {
    color: white;
  }
`;

export default styled(Navbar)`
  width: 100%;
  padding: 0.5rem;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
