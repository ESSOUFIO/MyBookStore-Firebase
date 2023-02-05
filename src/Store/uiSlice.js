import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { modal: false, modalInsert: false, modalDelete: false },
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
  },
});

export const { showHideModal } = uiSlice.actions;
export default uiSlice.reducer;
