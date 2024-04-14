import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SeachState {
  keyword: string;
  inputTerm: string;
  searchPanelStatus: boolean;
}

const initialState: SeachState = {
  keyword: "",
  inputTerm: "",
  searchPanelStatus: false,
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    setInputTerm: (state, action: PayloadAction<string>) => {
      state.inputTerm = action.payload;
    },
    setSearchPanelStatus: (state, action: PayloadAction<boolean>) => {
      state.searchPanelStatus = action.payload;
    },
  },
});

export const { setSearchTerm, setInputTerm, setSearchPanelStatus } =
  searchSlice.actions;

export default searchSlice.reducer;
