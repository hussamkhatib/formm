import { Input, Box, Textarea } from "@chakra-ui/react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { updateInput } from "../../app/services/formBuilder/formBuilderSlice";

type Props = {
  index: number;
  label: string;
};

const LongAnswerInput: FC<Props> = ({ index, label }) => {
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
        value={label}
        placeholder="Question"
      />
      <Textarea placeholder="long answer text" disabled />
    </Box>
  );
};

export default LongAnswerInput;
