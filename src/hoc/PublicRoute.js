//  high order Component (HOC)
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};
