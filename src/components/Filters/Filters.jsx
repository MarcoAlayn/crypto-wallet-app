import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortAssets } from "../../redux/actions";
import "./Filters.css";

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
    <div className="sortContainer d-flex justify-content-center">
      <div className="sortByContainer d-flex align-items-center">
        <div className="sortLabel mr-3">Sort by:</div>
        <select
          className="form-control custom-select "
          style={{ marginLeft: "10px" }}
          value={sortBy}
          onChange={handleSortByChange}
        >
          <option value="default" disabled>
            Select One
          </option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div className="sortOrderContainer d-flex align-items-center">
        <div className="sortLabel mr-3" style={{ marginLeft: "10px" }}>
          Sort order:
        </div>
        <select
          className="sortSelect form-control custom-select"
          style={{ marginLeft: "10px" }}
          value={sortOrder}
          onChange={handleSortOrderChange}
        >
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
