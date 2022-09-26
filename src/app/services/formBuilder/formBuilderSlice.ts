import { createSlice } from "@reduxjs/toolkit";
import { defaultNewInput, InputType } from "./formBuilder.constant";

const initialState = [];

export const slice = createSlice({
  name: "form",
  initialState,
  reducers: {
    resetForm: () => {
      return initialState;
    },
    initForm: (state, action) => {
      return action.payload;
    },
    createInput: (state) => {
      state.push(defaultNewInput);
    },
    deleteInput: (state, action) => {
      state.splice(action.payload, 1);
    },
    updateInputType: (state, action) => {
      const { index, type } = action.payload;
      if (type === InputType.ShortAnswer || InputType.LongAnswer)
        state[index] = { ...state[index], type, label: "" };
      else state[index].type = type;
    },
    updateInput: (state, action) => {
      state[action.payload.index][action.payload.key] = action.payload.value;
    },
  },
});

export const {
  resetForm,
  initForm,
  createInput,
  deleteInput,
  updateInput,
  updateInputType,
} = slice.actions;
export const allFormInputsSelector = (state) => state.formBuilder;

export default slice.reducer;
