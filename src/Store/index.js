import { configureStore } from "@reduxjs/toolkit";
import books from "./bookSlice";
import auth from "./authSlice";
import ui from "./uiSlice";

const store = configureStore({ reducer: { books, auth, ui } });

export default store;
