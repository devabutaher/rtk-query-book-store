import { createSlice } from "@reduxjs/toolkit";

const initialState = { search: "", editData: {} };

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    searchBook: (state, action) => {
      state.search = action.payload;
    },
    editBookData: (state, action) => {
      state.editData = action.payload;
    },
  },
});

export const { searchBook, editBookData } = bookSlice.actions;
export default bookSlice.reducer;
