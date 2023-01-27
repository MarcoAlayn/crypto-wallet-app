import { MY_TYPE } from "../actions";

const initialState = {
  myState: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_TYPE: {
      return {
        ...state,
        myState: action.payload,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
