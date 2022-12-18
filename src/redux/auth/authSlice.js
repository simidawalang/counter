import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      const { user, accessToken } = action.payload;

      state.user = user;
      state.accessToken = accessToken;
    },
    logout: (state, action) => {
      state.user = null;
      state.accessToken = null;
    },
    signup: (state, action) => {
      const { user } = action.payload;

      state.user = user;
      state.accessToken = accessToken;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;

export const selectCurrentToken = (state) => state.auth.accessToken;
