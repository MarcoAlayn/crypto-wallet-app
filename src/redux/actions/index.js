import axios from "axios";

export const FETCH_ASSETS = "FETCH_ASSETS";
export const SORT_ASSETS = "SORT_ASSETS";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const SET_FAVORITES = "SET_FAVORITES";
export const SHOW_FAVORITES = "SHOW_FAVORITES";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const RESET_SEARCH = "RESET_SEARCH";

export function fetchAssets() {
  try {
    return async (dispatch) => {
      const response = await axios.get(
        "https://api.coinstats.app/public/v1/coins?currency=USD"
      );
      console.log("response.data:", response.data);
      dispatch({
        type: FETCH_ASSETS,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log("Error al cargar los assets", error);
  }
}

export function sortAssets(sortBy, sortOrder) {
  return (dispatch, getState) => {
    const { assets, searchingByName } = getState();
    const sortedAssets = [...assets].sort((a, b) => {
      if (sortBy === "name") {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (sortBy === "price") {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      }
    });
    const sortedSearchingByName = [...searchingByName].sort((a, b) => {
      if (sortBy === "name") {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (sortBy === "price") {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      }
    });
    dispatch({
      type: SORT_ASSETS,
      payload: sortedAssets,
    });
    dispatch({
      type: SEARCH_BY_NAME,
      payload: sortedSearchingByName,
    });
  };
}

export function addFavorite(asset) {
  return (dispatch, getState) => {
    const { assets, favorites } = getState();
    const addedAsset = [...assets].find((item) => item.id === asset.id);
    if (addedAsset !== undefined) {
      dispatch({
        type: ADD_FAVORITE,
        payload: [...favorites, addedAsset],
      });
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, addedAsset])
      );
    } else {
      console.log("El activo no se encuentra en el estado global");
    }
  };
}

export function removeFavorite(asset) {
  return (dispatch, getState) => {
    const { favorites } = getState();
    const removedAsset = [...favorites].filter((item) => item.id !== asset.id);
    dispatch({
      type: REMOVE_FAVORITE,
      payload: removedAsset,
    });
    localStorage.setItem("favorites", JSON.stringify(removedAsset));
  };
}

export function setFavorites(assets) {
  const favoritesFromLocalStorage = localStorage.getItem("favorites");
  let favorites = [];

  if (favoritesFromLocalStorage) {
    favorites = JSON.parse(favoritesFromLocalStorage);
  }

  const updatedFavorites = assets.filter((obj1) =>
    favorites.some((obj2) => obj1.id === obj2.id)
  );

  // console.log("updatedFavorites:", updatedFavorites);
  return {
    type: SET_FAVORITES,
    payload: updatedFavorites,
  };
}

export function getFavorites() {
  return (dispatch, getState) => {
    const { assets } = getState();
    const ids = [...assets].map((asset) => asset.id);
    const favorites = assets.filter((asset) => ids.includes(asset.id));
    dispatch(setFavorites(favorites));
  };
}

export function showFavorites() {
  return (dispatch) => {
    dispatch({
      type: SHOW_FAVORITES,
    });
  };
}

export function searchByName(name) {
  return (dispatch, getState) => {
    const { assets } = getState();
    if (name) {
      const filteredAssets = assets.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );

      dispatch({
        type: SEARCH_BY_NAME,
        payload: filteredAssets,
      });
    }
  };
}

export function resetSearchBar() {
  return (dispatch) => {
    dispatch({
      type: RESET_SEARCH,
    });
  };
}
