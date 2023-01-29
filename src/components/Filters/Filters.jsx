import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortAssets } from "../../redux/actions";

function Filters() {
  const [sortBy, setSortBy] = useState("default");
  const [sortOrder, setSortOrder] = useState("default");
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets);

  useEffect(() => {
    if (assets.length) {
      dispatch(sortAssets(sortBy, sortOrder));
    }
  }, [assets, sortBy, sortOrder]);

  function handleSortByChange(event) {
    setSortBy(event.target.value);
  }

  function handleSortOrderChange(event) {
    setSortOrder(event.target.value);
  }
  return (
    <div>
      <div>
        <div>Sort by:</div>
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="default" disabled>
            Select One
          </option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
        <div>Sort order:</div>
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="default" disabled>
            Select One
          </option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
