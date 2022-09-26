import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const slice = createSlice({
  name: "formResponse",
  initialState,
  reducers: {
    initForm: (state, action) => {
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
export const formResponseSelector = (state) => state.formResponse;

export default slice.reducer;
