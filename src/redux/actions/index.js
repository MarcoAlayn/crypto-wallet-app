import axios from "axios";

export const LOAD_ASSETS = "LOAD_ASSETS";

export function loadAssets() {
  return async (dispatch) => {
    const response = await axios.get(
      "https://api.coinstats.app/public/v1/coins"
    );
    dispatch({
      type: LOAD_ASSETS,
      payload: response.data,
    });
  };
}
