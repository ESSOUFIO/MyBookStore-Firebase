import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    modal: false,
    modalInsert: false,
    modalDelete: false,
    mode: "light",
    textMode: "dark",
  },
  reducers: {
    showHideModal: (state, action) => {
      state.modal = !state.modal;
      if (action.payload === "Insert") {
        state.modalInsert = !state.modalInsert;
      } else if (action.payload === "Delete") {
        state.modalDelete = !state.modalDelete;
      } else if (action.payload === "Back") {
        state.modalDelete = false;
        state.modalInsert = false;
      }
    },

    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      state.textMode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { showHideModal, toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;
