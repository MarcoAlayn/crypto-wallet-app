import React from "react";
import { useSelector } from "react-redux";

function ListAssets() {
  const coinsList = useSelector((state) => state.assets);
  return (
    <div>
      {coinsList &&
        coinsList.map((coin) => (
          <div key={coin.id}>
            <img src={coin.icon} alt={coin.name} />
            <span>{coin.symbol}</span>
            <span>{coin.rank}</span>
            <span>{coin.price}</span>
            <span>{coin.volume}</span>
            <span>{coin.marketCap}</span>
            <span>{coin.availableSupply}</span>
            <span>{coin.totalSupply}</span>
            <span>{coin.priceChange1h}</span>
            <span>{coin.priceChange1d}</span>
            <span>{coin.priceChange1w}</span>
          </div>
        ))}
    </div>
  );
}

export default ListAssets;
