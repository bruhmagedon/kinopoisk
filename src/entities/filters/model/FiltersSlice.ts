import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SelectedFilters {
  "genres.name": string;
  "countries.name"?: string;
  status?: string;
  type?: string;
  year?: string;
}

export interface BasicState {
  filters: SelectedFilters;
}

const initialState: BasicState = {
  filters: {
    "genres.name": "",
    "countries.name": "",
    type: "",
    status: "",
    year: "",
  },
};

export const filtersSlice = createSlice({
  name: "movieFilters",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        filterName: keyof BasicState["filters"];
        filterValue: string;
      }>
    ) => {
      if (action.payload.filterValue.toLowerCase() === "нет") {
        state.filters[action.payload.filterName] = "";
      } else {
        state.filters[action.payload.filterName] = action.payload.filterValue;
      }
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const { setFilter, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
