import axios from "axios";

export const FETCH_ASSETS = "FETCH_ASSETS";
export const SORT_ASSETS = "SORT_ASSETS";

export function fetchAssets() {
  try {
    return async (dispatch) => {
      const response = await axios.get(
        "https://api.coinstats.app/public/v1/coins"
      );
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
    const { assets } = getState();
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
    dispatch({
      type: "SORT_ASSETS",
      payload: sortedAssets,
    });
  };
}
