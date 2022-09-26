import { IconButton, Flex, Select, Switch, Box } from "@chakra-ui/react";
import FormElementWrapper from "../FormElementWrapper";
import { DeleteIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
  InputType,
  inputTypeOptions,
} from "../../app/services/formBuilder/formBuilder.constant";
import ShortAnswerInput from "./ShortAnswerInput";
import LongAnswerInput from "./LongAnswerInput";
import {
  deleteInput,
  updateInput,
  updateInputType,
} from "../../app/services/formBuilder/formBuilderSlice";
import { useDispatch } from "react-redux";
import { FC } from "react";

type Props = {
  data: {
    type: InputType;
    label: string;
    required: boolean;
  };
  index: number;
};

const FormInput: FC<Props> = ({ data, index }) => {
  const { type, label, required } = data;
  const dispatch = useDispatch();

  return (
    <FormElementWrapper>
      <>
        <Select
          onChange={(e) => {
            dispatch(updateInputType({ index, type: e.target.value }));
          }}
          value={type}
          icon={<TriangleDownIcon h={3} w={3} />}
          placeholder={type}
        >
          {inputTypeOptions
            .filter((option) => option !== type)
            .map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </Select>
        <Flex py={8}>
          {type === InputType.ShortAnswer && (
            <ShortAnswerInput label={label} index={index} />
          )}
          {type === InputType.LongAnswer && (
            <LongAnswerInput label={label} index={index} />
          )}
        </Flex>

        <Flex gap={2} alignItems="center" justifyContent="end">
          <Flex alignItems="center" gap={2}>
            <label htmlFor="required">Required</label>
            <Switch
              isChecked={required}
              onChange={(e) => {
                dispatch(
                  updateInput({
                    index,
                    value: e.target.checked,
                    key: "required",
                  })
                );
              }}
              id="required"
            />
          </Flex>
          <IconButton
            onClick={() => dispatch(deleteInput({ index }))}
            // /TODO:
            size="sm"
            aria-label={""}
            icon={<DeleteIcon />}
          />
        </Flex>
      </>
    </FormElementWrapper>
  );
};

export default FormInput;
