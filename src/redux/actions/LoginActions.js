import axios from "axios";

import { LOG_IN, LOG_OUT } from "../types/Types";

export const loginAction = (user, password) => {
  return async (dispatch) => {
    try {
      const { data, status } = await axios.post("/login", { user, password });
      console.log(data);
      dispatch(loggin({ data, status }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const loggin = (data) => ({
  type: LOG_IN,
  payload: data,
});

export const logoutAction = () => ({
  type: LOG_OUT,
});
