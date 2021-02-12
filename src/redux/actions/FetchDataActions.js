import {
  FETCH_STUDENTS_DATA,
  FETCH_ALL_DATA,
  FETCH_CHARACTER,
  BACK_HOME,
} from "../types/Types";
import axios from "axios";

export const fetchStudentData = () => {
  return async (dispatch) => {
    try {
      console.log("STUDENT'S DATA");
      const { data } = await axios.get(
        process.env.REACT_APP_URL_STUDENTS_CHARACTERS
      );
      console.log(data);
      dispatch(studentsData(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const studentsData = (data) => ({
  type: FETCH_STUDENTS_DATA,
  payload: data,
});

export const fetchAllData = () => {
  return async (dispatch) => {
    try {
      console.log("ALL DATA");
      const { data } = await axios.get(
        process.env.REACT_APP_URL_ALL_CHARACTERS
      );
      console.log(data);
      dispatch(allData(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const allData = (data) => ({
  type: FETCH_ALL_DATA,
  payload: data,
});

export const fetchCaracter = (data) => ({
  type: FETCH_CHARACTER,
  payload: data,
});

export const backHome = () => ({
  type: BACK_HOME,
});
