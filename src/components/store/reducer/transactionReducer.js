import { SET_LOADER, CLOSE_LOADER, SET_TRANSACTION } from "../types/UserTypes";

const initState = {
  loading: false,
  transaction: [],
};

export const TransactionReducer = (state = initState, action) => {
  const { type, payload } = action;
  if (type === SET_LOADER) {
    return { ...state, loading: true };
  } else if (type === CLOSE_LOADER) {
    return { ...state, loading: false };
  }
  if (type === SET_TRANSACTION) {
    return {
      ...state,
      transaction: payload.data,
    };
  } else {
    return state;
  }
};
