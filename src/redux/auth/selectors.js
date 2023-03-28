import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = createSelector(
  [state => state.auth.isLoggedIn],
  isLoggedIn => {
    return isLoggedIn;
  }
);

export const selectAuthError = state => state.auth.error;
