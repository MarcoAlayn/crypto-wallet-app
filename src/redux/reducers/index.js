import {
  FETCH_ASSETS,
  SORT_ASSETS,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_FAVORITES,
} from "../actions";

const initialState = {
  assets: [],
  sortedAssets: [],
  favorites: [],
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
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
      };
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
