import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showFavorites, resetSearchBar } from "../../redux/actions";
import "./ToggleButton.css";

function ToggleButton() {
  const toggleFavorites = useSelector((state) => state.showFavorites);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showFavorites());
    dispatch(resetSearchBar());
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label
          className={`btn btn-outline-secondary custom-bg ${
            toggleFavorites ? "" : "active"
          }`}
        >
          <input
            type="radio"
            name="options"
            id="option1"
            autoComplete="off"
            checked={!toggleFavorites}
            onChange={handleClick}
          />{" "}
          Show All
        </label>
        <label
          className={`btn btn-outline-secondary custom-bg ${
            toggleFavorites ? "active" : ""
          }`}
        >
          <input
            type="radio"
            name="options"
            id="option2"
            autoComplete="off"
            checked={toggleFavorites}
            onChange={handleClick}
          />{" "}
          Show Favorites
        </label>
      </div>
    </div>
  );
}

export default ToggleButton;
