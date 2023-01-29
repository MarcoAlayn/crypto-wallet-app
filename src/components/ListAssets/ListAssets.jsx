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
      <div className="row justify-content-center">
        <div className="col-12 col-md-12">
          <div className="card bg-white rounded">
            <div className="card-body">
              {searchByName.length
                ? searchByName.map((coin) => (
                    <div className="row" key={coin.id}>
                      <Asset coin={coin} />
                    </div>
                  ))
                : showFavorites
                ? favorites.map((coin) => (
                    <div className="row" key={coin.id}>
                      <Asset coin={coin} />
                    </div>
                  ))
                : sortedAssets.length
                ? sortedAssets.map((coin) => (
                    <div className="row" key={coin.id}>
                      <Asset coin={coin} />
                    </div>
                  ))
                : assets &&
                  assets.map((coin) => (
                    <div className="row" key={coin.id}>
                      <Asset coin={coin} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListAssets;
