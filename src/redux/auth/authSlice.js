import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, {payload}) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
    signup: (state, {payload}) => {
      state.user = payload;
    },
  },
});

export const { login, logout, signup } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.user.user;

export const selectCurrentToken = (state) => state.user.accessToken;
