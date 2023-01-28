import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import ListAssets from "./components/ListAssets/ListAssets";
import { loadAssets } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets);

  const refreshList = () => {
    setInterval(() => {
      dispatch(loadAssets());
    }, 60000);
  };

  const clearTheInterval = () => {
    clearInterval(refreshList);
  };

  useEffect(() => {
    if (!assets.length) {
      dispatch(loadAssets());
    }
    refreshList();
    return clearTheInterval();
  }, []);

  return (
    <div className="App">
      <ListAssets />
    </div>
  );
}

export default App;
