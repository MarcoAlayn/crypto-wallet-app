import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";

function Asset({ coin }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleAddToFavorites = () => {
    dispatch(addFavorite(coin));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFavorite(coin));
  };

  const isFavorite = favorites.find((item) => item.id === coin.id);

  return (
    <div className="col-12 col-sm-6">
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
      <div>
        {isFavorite ? (
          <button type="button" onClick={handleRemoveFromFavorites}>
            Remove from Favorites
          </button>
        ) : (
          <button type="button" onClick={handleAddToFavorites}>
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
}

export default Asset;
