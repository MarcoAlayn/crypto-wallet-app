import React, { useState } from "react";
import { useSelector } from "react-redux";
import Asset from "../Asset/Asset";

function ListAssets() {
  const [showFavorites, SetShowFavorites] = useState(false);
  const assets = useSelector((state) => state.assets);
  const sortedAssets = useSelector((state) => state.sortedAssets);
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="container">
      <button type="button" onClick={() => SetShowFavorites(!showFavorites)}>
        {!showFavorites ? "Show Favorites" : "Show All"}
      </button>
      <div className="row">
        {showFavorites
          ? favorites.map((coin) => <Asset key={coin.id} coin={coin} />)
          : sortedAssets.length
          ? sortedAssets.map((coin) => <Asset key={coin.id} coin={coin} />)
          : assets && assets.map((coin) => <Asset key={coin.id} coin={coin} />)}
      </div>
    </div>
  );
}

export default ListAssets;
