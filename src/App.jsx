import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import ListAssets from "./components/ListAssets/ListAssets";
import { loadAssets } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAssets());
  }, []);

  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <ListAssets />
    </div>
  );
}

export default App;
