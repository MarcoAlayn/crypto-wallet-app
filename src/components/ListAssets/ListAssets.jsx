import React from "react";
import { useSelector } from "react-redux";

function ListAssets() {
  const coinsList = useSelector((state) => state.assets);
  return (
    <div className="container">
      <div className="row">
        {coinsList &&
          coinsList.map((coin) => (
            <div className="col-12 col-sm-6" key={coin.id}>
              <div>
                <span htmlFor="">Nombre</span>
                <img src={coin.icon} alt={coin.name} />
                <span>{coin.symbol}</span>
              </div>
              <div>
                <span>Ranking</span>
                <span>{coin.rank}</span>
              </div>
              <div>
                <span>Price</span>
                <span>{coin.price}</span>
              </div>
              <div>
                <span>Volume</span>
                <span>{coin.volume}</span>
              </div>
              <div>
                <span>Market Cap.</span>
                <span>{coin.marketCap}</span>
              </div>
              <div>
                <span>Available Supply</span>
                <span>{coin.availableSupply}</span>
              </div>
              <div>
                <span>Total Supply</span>
                <span>{coin.totalSupply}</span>
              </div>
              <div>
                <span>Price Change 1h</span>
                <span>{coin.priceChange1h}</span>
              </div>
              <div>
                <span>Price Change 1d</span>
                <span>{coin.priceChange1d}</span>
              </div>
              <div>
                <span>Price Change 1w</span>
                <span>{coin.priceChange1w}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListAssets;
