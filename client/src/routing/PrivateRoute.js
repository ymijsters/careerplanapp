import React from "react";
import { Navigate } from "react-router-dom";
import Spinner from "../layout/Spinner";
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
  const auth = useSelector((state) => state.auth);
  if (auth.loading) return <Spinner />;
  if (auth.isAuthenticated) return <props.component />;

  return <Navigate to='/login' />;
};
