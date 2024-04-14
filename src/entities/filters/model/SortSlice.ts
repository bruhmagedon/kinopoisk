import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SortType = "Отсутствует" | "По названию" | "По рейтингу" | "По году";
interface SortState {
  sort: string;
  viewCount: string;
}

const initialState: SortState = {
  sort: "Отсутствует",
  viewCount: "10",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort: (
      state,
      action: PayloadAction<{
        key: keyof SortState;
        value: string;
      }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
    resetSort: (state) => {
      state.sort = initialState.sort;
      state.viewCount = initialState.viewCount;
    },
  },
});

export const { setSort, resetSort } = sortSlice.actions;
export default sortSlice.reducer;
