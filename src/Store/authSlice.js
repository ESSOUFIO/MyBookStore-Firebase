import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, username: "Omar ESSOUFI" },
  reducers: {
    logInOut: (state, action) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { logInOut } = authSlice.actions;
export default authSlice.reducer;
