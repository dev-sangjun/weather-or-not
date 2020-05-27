import React, { useRef } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setKeyword } from "../reducers";

const SearchBar = props => {
  const { className, getSuggestions, suggestions, onSuggestionClick } = props;
  const keyword = useSelector(state => state.search);
  const searchInput = useRef();
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(setKeyword(e.target.value));
    getSuggestions(e.target.value);
  };
  const onClick = e => {
    dispatch(setKeyword(""));
    onSuggestionClick(e);
  };
  return (
    <div className={className}>
      <div className="search-container">
        <form className="search-form" onSubmit={e => e.preventDefault()}>
          <MdSearch className="search-icon" />
          <SearchInput
            type="text"
            placeholder="Search..."
            onChange={onChange}
            ref={searchInput}
            value={keyword}
          />
        </form>
      </div>
      <Suggestions className="suggestions">
        {suggestions.map((suggestion, index) => (
          <li
            className="suggestion"
            key={suggestion.id}
            onClick={onClick}
            data-index={index}
          >
            {suggestion.place_name}
          </li>
        ))}
      </Suggestions>
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

const Suggestions = styled.ul`
  list-style: none;
  width: 100%;
`;

export default styled(SearchBar)`
  position: relative;
  display: flex;
  flex-direction: column;
  border: thin rgba(255, 255, 255, 0.7) solid;
  background-color: rgba(70, 70, 70, 1);
  border-radius: 0.5rem;
  overflow: hidden;
  .search-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    .search-form {
      flex: 1;
      display: flex;
      align-items: center;
      .search-icon {
        width: 1.5rem;
        height: 1.5rem;
        font-size: 1.5em;
        color: white;
        margin-right: 0.125rem;
        margin-bottom: 0;
      }
      input {
        flex: 1;
      }
    }
  }
  .suggestions {
    color: white;
    user-select: none;
    li {
      padding: 0.5rem 1rem;
      &:hover {
        background-color: rgba(120, 120, 120, 1);
      }
    }
  }
`;
