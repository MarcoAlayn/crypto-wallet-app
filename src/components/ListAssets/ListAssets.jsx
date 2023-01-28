import React from "react";
import { useSelector } from "react-redux";
import Asset from "../Asset/Asset";

function ListAssets() {
  const assets = useSelector((state) => state.assets);
  const sortedAssets = useSelector((state) => state.sortedAssets);

  return (
    <div className="container">
      <div className="row">
        {sortedAssets.length
          ? sortedAssets.map((coin) => <Asset key={coin.id} coin={coin} />)
          : assets && assets.map((coin) => <Asset key={coin.id} coin={coin} />)}
      </div>
    </div>
  );
}

export default ListAssets;
