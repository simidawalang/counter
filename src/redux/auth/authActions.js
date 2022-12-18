import { createAsyncThunk } from "@reduxjs/toolkit";
import { SIGNUP } from "./authTypes";
import { firebaseAuth } from "../../firebase.config";

export const userSignup = createAsyncThunk(
  SIGNUP,
  async ({ displayName, username, email, password }, { rejectWithValue }) => {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    await firebaseAuth.createUserWithEmailAndPassword(email, password).then(({user}) => {
        user.updateProfile({
            displayName
        })
    })
  }
);
