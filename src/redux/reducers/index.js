import { FETCH_ASSETS, SORT_ASSETS } from "../actions";

const initialState = {
  assets: [],
  sortedAssets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ASSETS:
      return {
        ...state,
        assets: action.payload.coins,
      };
    case SORT_ASSETS:
      return {
        ...state,
        sortedAssets: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
