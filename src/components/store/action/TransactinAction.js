import axios from "axios";
import { CLOSE_LOADER, SET_LOADER, SET_TRANSACTION } from "../types/UserTypes";

export const fetchTransaction = () => {
  return async (dispatch, getState) => {
    const {
      AuthReducer: { token },
    } = getState();
    try {
      console.log(token, "transaction");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const bodyParameters = {};
      const { data } = await axios.post(
        "https://jp-dev.cityremit.global/web-api/transaction-manager/v1/admin/dashboard/search",
        bodyParameters,
        config
      );
      console.log(data.data, "from action");
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: SET_TRANSACTION, payload: data });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
    }
  };
};
