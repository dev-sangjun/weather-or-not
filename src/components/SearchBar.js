import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

const SearchBar = props => {
  const { className } = props;
  return (
    <div className={className}>
      <Link>
        <MdSearch className="search-icon" />
      </Link>
      <SearchInput type="text" placeholder="Search..." />
    </div>
  );
};

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  padding: 0 0.5rem;
  font-size: 1em;
  &:focus {
    outline: none;
  }
`;

export default styled(SearchBar)`
  height: 2rem;
  display: flex;
  align-items: center;
  border: thin rgba(255, 255, 255, 0.7) solid;
  border-radius: 1rem;
  padding: 0.5rem;
  .search-icon {
    margin-right: 0.125rem;
    margin-bottom: 0;
  }
`;
