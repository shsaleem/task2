import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const notesApi = createApi({
  reducerPath: "notes",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchNotes: builder.query({
        query: () => {
          return {
            url: "/notes",
            method: "GET",
          };
        },
        providesTags: ["Note"],
      }),
      addNote: builder.mutation({
        query: (note) => {
          console.log(note);
          return {
            url: "/notes",
            method: "POST",
            body: {
              title: note,
              id: new Date().getTime().toString(),
            },
          };
        },
        invalidatesTags: ["Note"],
      }),
      removeNote: builder.mutation({
        query: (note) => {
          return {
            url: `/notes/${note.id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["Note"],
      }),
    };
  },
});

export const { useFetchNotesQuery, useAddNoteMutation, useRemoveNoteMutation } =
  notesApi;
export { notesApi };
