import { createSlice } from "@reduxjs/toolkit";

const initialState = { search: "" };

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    searchBook: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { searchBook } = bookSlice.actions;
export default bookSlice.reducer;
