import { LOAD_ASSETS } from "../actions";

const initialState = {
  assets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ASSETS: {
      return {
        ...state,
        assets: action.payload.coins,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
