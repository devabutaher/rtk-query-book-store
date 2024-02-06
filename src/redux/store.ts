import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./books/apiSlice";
import bookSlice from "./books/bookSlice";

const store = configureStore({
  reducer: {
    books: bookSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

export default store;
