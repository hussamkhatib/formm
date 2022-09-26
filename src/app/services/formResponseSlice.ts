import { createSlice } from "@reduxjs/toolkit";

type SliceState = {
  index: number;
  value: string;
}[];

const initialState: SliceState = [];

export const slice = createSlice({
  name: "formResponse",
  initialState,
  reducers: {
    initForm: (_, action) => {
      return action.payload;
    },
    clearForm: () => {
      return initialState;
    },
    updateResponseInput: (state, action) => {
      const { index, value } = action.payload;
      state[index] = value;
    },
  },
});

export const { initForm, clearForm, updateResponseInput } = slice.actions;
export const formResponseSelector = (state: any) => state.formResponse;

export default slice.reducer;
