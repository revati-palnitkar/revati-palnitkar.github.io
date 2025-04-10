import React from "react";
import "./SearchBar.css"

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    className="search-input"
    placeholder="Search movies..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

export default SearchBar;