import { Input, Box, Textarea } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateInput } from "../../app/services/formBuilder/formBuilderSlice";

const LongAnswerInput = ({ index }) => {
  const dispatch = useDispatch();

  return (
    <Box>
      <Input
        onChange={(e) =>
          dispatch(
            updateInput({
              index,
              value: e.target.value,
              key: "label",
            })
          )
        }
        placeholder="Question"
      />
      <Textarea placeholder="long answer text" disabled />
    </Box>
  );
};

export default LongAnswerInput;
