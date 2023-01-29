import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetSearchBar, searchByName } from "../../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchByName(e.target.value));
  };

  const resetSearch = () => {
    setSearchTerm("");
    dispatch(searchByName(""));
    dispatch(resetSearchBar());
  };

  return (
    <div className="searchBar">
      <form>
        <input
          className="searchBarInput"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="button" onClick={resetSearch}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
