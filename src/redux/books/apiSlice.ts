import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),

  tagTypes: ["Books", "Book"],

  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["Books"],
    }),

    getBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: (result) => [{ type: "Book", id: result.id }],
    }),

    addBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Books"],
    }),

    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),

      invalidatesTags: (result) => ["Books", { type: "Book", id: result.id }],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = apiSlice;
export default apiSlice;
