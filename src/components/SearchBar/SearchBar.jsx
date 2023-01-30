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
      <form className="d-flex justify-content-center">
        <input
          className="searchBarInput"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            border: "1px solid lightgrey",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "18px",
            width: "50%",
            marginRight: "10px",
          }}
        />
        <button
          type="button"
          onClick={resetSearch}
          style={{
            backgroundColor: "white",
            border: "1px solid lightgrey",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "18px",
            color: "GrayText",
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
