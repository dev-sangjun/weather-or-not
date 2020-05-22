import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { SearchBar } from "../components";

const Search = props => {
  const { className } = props;
  return (
    <div className={className}>
      <SearchBar className="search-bar" />
      <Link to="/">
        <MdFavorite />
      </Link>
    </div>
  );
};

export default styled(Search)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  a {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.5em;
    color: white;
  }
  .search-bar {
    width: 70%;
    margin-right: 1rem;
  }
`;
