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
  // formateamos un numero como moneda con una coma como separador de miles y dos decimales.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const formattedPrice = formatter.format(coin.price);
  const formattedMarketCap = formatter.format(coin.marketCap);

  return (
    <tr className="d-sm-table-row">
      <td className="d-sm-table-cell d-none d-sm-block">{coin.rank}</td>
      <td className="d-sm-table-cell">
        <div>
          <img
            src={coin.icon}
            alt={coin.name}
            className="rounded-circle mr-3"
            style={{ width: "30px", height: "30px" }}
          />
          <span style={{ marginLeft: "0px" }}>
            {coin.name}/{coin.symbol}
          </span>
        </div>
      </td>
      <td className="d-sm-table-cell">{formattedPrice}</td>
      <td
        className="d-sm-table-cell"
        style={{ color: coin.priceChange1h >= 0 ? "green" : "red" }}
      >
        {coin.priceChange1h}
      </td>
      <td
        className="d-sm-table-cell d-none d-sm-block"
        style={{ color: coin.priceChange1d >= 0 ? "green" : "red" }}
      >
        {coin.priceChange1d}
      </td>
      <td
        className="d-sm-table-cell d-none d-sm-block"
        style={{ color: coin.priceChange1w >= 0 ? "green" : "red" }}
      >
        {coin.priceChange1w}
      </td>
      <td className="d-sm-table-cell d-none d-sm-block">
        {formattedMarketCap}
      </td>
      <td className="d-sm-table-cell">
        {isFavorite ? (
          <button
            type="button"
            onClick={handleRemoveFromFavorites}
            className="btn btn-primary"
          >
            <i className="fas fa-star" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleAddToFavorites}
            className="btn btn-outline-primary"
          >
            <i className="far fa-star" />
          </button>
        )}
      </td>
    </tr>
  );
}

export default Asset;
