import { FETCH_STUDENTS_DATA, FETCH_ALL_DATA } from "../types/Types";

const initialState = {
  students: [],
  allCharacters: [],
};

export const fetchDataReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS_DATA:
      return {
        ...state,
        students: action.payload,
      };

    case FETCH_ALL_DATA:
      return {
        ...state,
        allCharacters: action.payload,
      };
    default:
      return state;
  }
};
