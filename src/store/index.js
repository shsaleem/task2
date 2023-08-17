import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { notesApi } from "./api/notesApi";

export const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(notesApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchNotesQuery,
  useAddNoteMutation,
  useRemoveNoteMutation,
} from "./api/notesApi";
