import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;
// const domain = "https://warstrap-backend.herokuapp.com";
const domain = "http://localhost:8000";

const initialState = {
  data: {
    status: undefined,
    user: {
      username: undefined,
      email: undefined,
      _id: undefined,
    },
  },
};

export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  try {
    const res = await axios({
      method: "GET",
      url: `${domain}/isLoggedIn`,
    });
    const { data } = res;
    return data;
  } catch (error) {
    throw Error(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // logout(state, action) {
    //   state.isLoggedIn = false;
    // },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      if (action.payload.status === "noToken")
        state.data = {
          status: "noUser",
          // user: {
          //   username: undefined,
          //   email: undefined,
          //   _id: undefined,
          // },
        };

      if (action.payload.status === "success" && action.payload.user)
        state.data = {
          status: "user",
          user: action.payload.user,
        };

      if (!action.payload.user) {
        state.data = {
          status: "noUser",
          // user: {
          //   username: undefined,
          //   email: undefined,
          //   _id: undefined,
          // },
        };
      }
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
