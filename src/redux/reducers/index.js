import {
  FETCH_ASSETS,
  SORT_ASSETS,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_FAVORITES,
  SHOW_FAVORITES,
  SEARCH_BY_NAME,
  RESET_SEARCH,
} from "../actions";

const initialState = {
  assets: [],
  sortedAssets: [],
  favorites: [],
  showFavorites: false,
  searchingByName: [],
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
    case SHOW_FAVORITES: {
      return {
        ...state,
        showFavorites: !state.showFavorites,
      };
    }
    case SEARCH_BY_NAME: {
      return {
        ...state,
        searchingByName: action.payload,
      };
    }
    case RESET_SEARCH: {
      return {
        ...state,
        searchingByName: [],
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
