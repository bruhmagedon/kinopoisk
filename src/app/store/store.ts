import { FiltersSlice, filterApi } from "@/entities/filters";
import SortSlice from "@/entities/filters/model/SortSlice";
import { movieApi } from "@/entities/movies";
import { searchSlice } from "@/entities/search";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [filterApi.reducerPath]: filterApi.reducer,
    filters: FiltersSlice,
    search: searchSlice,
    sort: SortSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware, filterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
