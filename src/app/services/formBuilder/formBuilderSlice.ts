import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultNewInput, InputType } from "./formBuilder.constant";
import { v4 as uuidv4 } from "uuid";

type Input = {
  type: InputType;
  required: boolean;
  label: string;
};

type SliceState = {
  title: string;
  description: string;
  inputs: Input[];
};

type Payload = {
  key: string;
  value: any;
  index: number;
};

const initialState: SliceState = {
  title: "Untitled form",
  description: "",
  inputs: [],
};

const contactTemplateState = {
  title: "Contact form",
  description: "",
  inputs: [
    {
      id: uuidv4(),
      type: InputType.ShortAnswer,
      required: true,
      label: "please enter your email",
    },
    {
      id: uuidv4(),
      type: InputType.ShortAnswer,
      required: true,
      label: "please enter your phone number",
    },
  ],
};
const eventTemplateState = {
  title: "Event form",
  description: "RSVP for our event",
  inputs: [
    {
      id: uuidv4(),
      type: InputType.ShortAnswer,
      required: true,
      label: "please enter your email",
    },
    {
      id: uuidv4(),
      type: InputType.LongAnswer,
      required: true,
      label: "Why do you want to attend this event?",
    },
  ],
};

export const slice = createSlice({
  name: "form",
  initialState,
  reducers: {
    initForm: (state, action) => {
      return action.payload;
    },
    setTemplate: (state, action) => {
      switch (action.payload) {
        case "contact":
          return contactTemplateState;
        case "event":
          return eventTemplateState;
        default:
          return state;
      }
    },
    createInput: (state) => {
      state.inputs.push(defaultNewInput);
    },
    deleteInput: (state, action) => {
      state.inputs.splice(action.payload, 1);
    },
    updateInputType: (state, action) => {
      const { index, type } = action.payload;
      if (type === InputType.ShortAnswer || InputType.LongAnswer)
        state.inputs[index] = { ...state.inputs[index], type, label: "" };
      else state.inputs[index].type = type;
    },
    updateTitleOrDescription: (state: any, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    updateInput: (state, action: PayloadAction<Payload>) => {
      // @ts-ignore
      state.inputs[action.payload.index][action.payload.key] =
        action.payload.value;
    },
  },
});

export const {
  initForm,
  setTemplate,
  createInput,
  deleteInput,
  updateInput,
  updateInputType,
  updateTitleOrDescription,
} = slice.actions;
export const allFormBuilderInputsSelector = (state: any) => state.formBuilder;

export default slice.reducer;
