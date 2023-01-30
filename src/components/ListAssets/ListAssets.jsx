import React from "react";
import { useSelector } from "react-redux";
import "./ListAssets.css";
import Asset from "../Asset/Asset";

function ListAssets() {
  const showFavorites = useSelector((state) => state.showFavorites);
  const assets = useSelector((state) => state.assets);
  const sortedAssets = useSelector((state) => state.sortedAssets);
  const favorites = useSelector((state) => state.favorites);
  const searchByName = useSelector((state) => state.searchingByName);

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-lg-10 mx-auto rounded custom-tableBackground ">
          <table className="table table-striped d-none d-sm-table mx-auto">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Cryptocurrency</th>
                <th scope="col">Price/USD</th>
                <th scope="col">Change (1h)</th>
                <th scope="col">Change (1d)</th>
                <th scope="col">Change (1w)</th>
                <th scope="col">Market Cap</th>
                <th scope="col">Favorites</th>
              </tr>
            </thead>
            <tbody>
              {searchByName.length
                ? searchByName.map((coin) => (
                    <Asset coin={coin} key={coin.id} />
                  ))
                : showFavorites
                ? favorites.map((coin) => <Asset coin={coin} key={coin.id} />)
                : sortedAssets.length
                ? sortedAssets.map((coin) => (
                    <Asset coin={coin} key={coin.id} />
                  ))
                : assets &&
                  assets.map((coin) => <Asset coin={coin} key={coin.id} />)}
            </tbody>
          </table>

          <table className="table table-striped d-sm-none mx-auto">
            <thead>
              <tr>
                <th scope="col">Activos</th>
                <th scope="col">Precio/USD</th>
                <th scope="col">Cambio (1h)</th>
                <th scope="col">Favoritos</th>
              </tr>
            </thead>
            <tbody>
              {searchByName.length
                ? searchByName.map((coin) => (
                    <Asset coin={coin} key={coin.id} />
                  ))
                : showFavorites
                ? favorites.map((coin) => <Asset coin={coin} key={coin.id} />)
                : sortedAssets.length
                ? sortedAssets.map((coin) => (
                    <Asset coin={coin} key={coin.id} />
                  ))
                : assets &&
                  assets.map((coin) => <Asset coin={coin} key={coin.id} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListAssets;
