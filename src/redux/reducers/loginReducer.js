import { LOG_IN, LOG_OUT } from "../types/Types";

const initialState = {
  userData: [],
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        userData: action.payload,
      };

    case LOG_OUT: {
      return {
        userData: [],
      };
    }

    default:
      return state;
  }
};
