import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showFavorites, resetSearchBar } from "../../redux/actions";

function ToggleButton() {
  const toggleFavorites = useSelector((state) => state.showFavorites);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showFavorites());
    dispatch(resetSearchBar());
  };
  return (
    <button type="button" onClick={handleClick}>
      {!toggleFavorites ? "Show Favorites" : "Show All"}
    </button>
  );
}

export default ToggleButton;
