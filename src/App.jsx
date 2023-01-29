import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import ListAssets from "./components/ListAssets/ListAssets";
import { fetchAssets, getFavorites } from "./redux/actions";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import Filters from "./components/Filters/Filters";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets);

  // Fetch a la api para cargar los assets en un estado global y refrescar cada minuto
  const timeToRefresh = 60000; // 1 minuto

  useEffect(() => {
    if (!assets.length) {
      dispatch(fetchAssets());
    }
    dispatch(getFavorites());

    const intervalRefresh = setInterval(() => {
      dispatch(fetchAssets());
      dispatch(getFavorites());
    }, timeToRefresh);

    return () => {
      clearInterval(intervalRefresh);
    };
  }, [assets, dispatch]);

  return (
    <div className="App">
      <Filters />
      <ToggleButton />
      <SearchBar />
      <ListAssets />
    </div>
  );
}

export default App;
