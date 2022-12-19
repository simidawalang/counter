import { createAsyncThunk } from "@reduxjs/toolkit";
import { SIGNUP } from "./authTypes";
import firebaseAuth from "../../firebase.config";
import { auth } from "../../firebase.config";

export const userSignup = createAsyncThunk(
  SIGNUP,
  async ({ displayName, username, email, password }, { rejectWithValue }) => {
    try {
      const userCredentials = await firebaseAuth
        .createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          user.updateProfile({
            displayName,
            email,
            username,
            password,
          });
        });

      console.log(userCredentials);
    } catch (e) {
      if (e.response && e.response.data.message) {
        return rejectWithValue(e.response.data.message);
      } else {
        return rejectWithValue(e.message);
      }
    }
  }
);
