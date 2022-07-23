import React from "react";
//import { Spinner } from "../layout/spinner";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = (props) => {
  const auth = useSelector((state) => state.auth);
  // if (auth.loading) return <Spinner />;
  if (auth.isAuthenticated) return <props.component />;

  return <Navigate to='/login' />;
};
