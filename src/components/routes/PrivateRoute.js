import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const tokens = localStorage.getItem("myToken");
  useEffect(() => {}, [tokens]);
  //   const { user } = useSelector((state) => state.AuthReducer);

  return !tokens ? <Navigate to="/" /> : <Outlet to="/dashboard" />;
};
export default PrivateRoute;
