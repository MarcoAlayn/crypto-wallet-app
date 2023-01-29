import React from "react";
import { useSelector } from "react-redux";
import Asset from "../Asset/Asset";

function ListAssets() {
  const showFavorites = useSelector((state) => state.showFavorites);
  const assets = useSelector((state) => state.assets);
  const sortedAssets = useSelector((state) => state.sortedAssets);
  const favorites = useSelector((state) => state.favorites);
  const searchByName = useSelector((state) => state.searchingByName);

  return (
    <div className="container">
      <div className="row">
        {searchByName.length
          ? searchByName.map((coin) => <Asset key={coin.id} coin={coin} />)
          : showFavorites
          ? favorites.map((coin) => <Asset key={coin.id} coin={coin} />)
          : sortedAssets.length
          ? sortedAssets.map((coin) => <Asset key={coin.id} coin={coin} />)
          : assets && assets.map((coin) => <Asset key={coin.id} coin={coin} />)}
      </div>
    </div>
  );
}

export default ListAssets;
