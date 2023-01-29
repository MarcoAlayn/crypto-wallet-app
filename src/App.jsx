import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import ListAssets from "./components/ListAssets/ListAssets";
import { fetchAssets, sortAssets, getFavorites } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets);

  // Fetch a la api para cargar los assets en un estado global y refrescar cada minuto
  const timeRefresh = 60000; // 1 minuto

  useEffect(() => {
    if (!assets.length) {
      dispatch(fetchAssets());
    }
    dispatch(getFavorites());

    const intervalRefresh = setInterval(() => {
      dispatch(fetchAssets());
      dispatch(getFavorites());
    }, timeRefresh);

    return () => {
      clearInterval(intervalRefresh);
    };
  }, [assets, dispatch]);

  // Handlechanges para ordenar
  const [sortBy, setSortBy] = useState("default");
  const [sortOrder, setSortOrder] = useState("default");

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
    <div className="App">
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
      <ListAssets />
    </div>
  );
}

export default App;
