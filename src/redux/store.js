import { configureStore } from "@reduxjs/toolkit";
import serchReducer from "./features/searchSlice";
import collectionReducer from './features/collectionSlice'


export const store = configureStore({
  reducer: {
    search: serchReducer,
    collection:collectionReducer
  },
});

