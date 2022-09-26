import { v4 as uuidv4 } from "uuid";

export enum InputType {
  ShortAnswer = "Short answer",
  LongAnswer = "Long answer",
  // TDOO: add more input types
  // MultipleChoice = "Multiple choice",
  // Checkbox = "Checkbox",
  // Dropdown = "Dropdown",
}

export const inputTypeOptions = Object.values(InputType);

export const defaultNewInput = {
  id: uuidv4(),
  type: InputType.ShortAnswer,
  required: false,
  label: "",
};
