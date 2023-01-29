import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import "./Asset.css";

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
    <div className="container custom-props">
      <div className="row d-flex align-items-center text-uppercase font-weight-bold">
        <div className="col-3">Nombre</div>
        <div className="col-2">Ranking</div>
        <div className="col-2">Precio</div>
        <div className="col-2">Volumen</div>
        <div className="col-2">Market Cap</div>
        <div className="col-1">Acción</div>
      </div>
      <div className="row d-flex align-items-center">
        <div className="col-3">
          <img
            src={coin.icon}
            alt={coin.name}
            className="rounded-circle mr-3"
            style={{ width: "30px", height: "30px" }}
          />
          <span>{coin.name}</span>
        </div>
        <div className="col-2">{coin.rank}</div>
        <div className="col-2">{coin.price}</div>
        <div className="col-2">{coin.volume}</div>
        <div className="col-2">{coin.marketCap}</div>
        <div className="col-1">
          {isFavorite ? (
            <button type="button" onClick={handleRemoveFromFavorites}>
              X
            </button>
          ) : (
            <button type="button" onClick={handleAddToFavorites}>
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Asset;
