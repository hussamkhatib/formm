import { Input, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateInput } from "../../app/services/formBuilder/formBuilderSlice";

const ShortAnswerInput = ({ index }) => {
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
      <Input placeholder="short answer text" disabled />
    </Box>
  );
};

export default ShortAnswerInput;
