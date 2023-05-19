import axios from "axios";

import {
  SET_LOADER,
  CLOSE_LOADER,
  SET_TOKEN,
  LOGIN_ERRORS,
} from "../types/UserTypes";

export const postLogin = (user) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      dispatch({ type: SET_LOADER });
      //   console.log(user, "user from action");
      const { data } = await axios.post(
        "https://jp-dev.cityremit.global/web-api/config/v1/auths/login",
        user,
        config
      );
      dispatch({ type: CLOSE_LOADER });
      //   console.log(data.data[0].token_key, "from action");
      //   console.log(data.full_name, "from action full name");
      localStorage.setItem("myToken", data.data[0].jwt_token);
      dispatch({ type: SET_TOKEN, payload: data.data[0].jwt_token });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      //   dispatch({ type: LOGIN_ERRORS, payload: error.response });
      //   console.log(error.response);
    }
  };
};
