import { LOG_IN, LOG_OUT, ERROR_LOGIN } from "../types/Types";

const initialState = {
  userData: [],
  error: false,
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

    case ERROR_LOGIN: {
      return {
        ...state,
        userData: [],
        error: true,
      };
    }
    default:
      return state;
  }
};
