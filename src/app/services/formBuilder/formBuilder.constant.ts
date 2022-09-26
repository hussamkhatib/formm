export enum InputType {
  ShortAnswer = "Short answer",
  LongAnswer = "Long answer",
  MultipleChoice = "Multiple choice",
  Checkbox = "Checkbox",
  Dropdown = "Dropdown",
}

export const inputTypeOptions = Object.values(InputType);

export const defaultNewInput = {
  type: InputType.ShortAnswer,
  required: false,
  label: "",
};
