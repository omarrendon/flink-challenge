import {
  FETCH_STUDENTS_DATA,
  FETCH_ALL_DATA,
  FETCH_CHARACTER,
  BACK_HOME,
} from "../types/Types";

const initialState = {
  students: [],
  allCharacters: [],
  character: {},
};

export const fetchDataReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS_DATA:
      return {
        ...state,
        students: action.payload,
        allCharacters: [],
      };

    case FETCH_ALL_DATA:
      return {
        ...state,
        allCharacters: action.payload,
        students: [],
      };

    case FETCH_CHARACTER:
      return {
        ...state,
        character: action.payload,
      };

    case BACK_HOME:
      return {
        ...state,
        character: {},
      };
    default:
      return state;
  }
};
