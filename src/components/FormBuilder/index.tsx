import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Input,
  Grid,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  allFormBuilderInputsSelector,
  createInput,
  updateTitleOrDescription,
} from "../../app/services/formBuilder/formBuilderSlice";
import FormInput from "./FormInput";
import FormBoxWrapper from "../FormElementWrapper";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const FormBuilder: FC<Props> = ({ children }) => {
  return (
    <Grid minHeight="100vh" templateRows="auto 1fr">
      {children}

      <Box bg="gray.200">
        <Container>
          <FormHeader />
          <FormInputs />
        </Container>
      </Box>
    </Grid>
  );
};

export default FormBuilder;

const FormHeader = () => {
  const dispatch = useDispatch();
  const allFormBuilderInputs = useSelector(allFormBuilderInputsSelector);

  return (
    <FormBoxWrapper>
      <>
        <Input
          placeholder="Form title"
          variant="unstyled"
          fontSize="2xl"
          onChange={(e) => {
            dispatch(
              updateTitleOrDescription({
                key: "title",
                value: e.target.value,
              })
            );
          }}
          value={allFormBuilderInputs.title}
          defaultValue="Untitled Form"
          maxLength={50}
        />
        <Input
          variant="unstyled"
          onChange={(e) => {
            dispatch(
              updateTitleOrDescription({
                key: "description",
                value: e.target.value,
              })
            );
          }}
          value={allFormBuilderInputs.description}
          placeholder="Form description"
        />
      </>
    </FormBoxWrapper>
  );
};

const FormInputs = () => {
  const dispatch = useDispatch();
  const allFormBuilderInputs = useSelector(allFormBuilderInputsSelector);
  return (
    <Box>
      {allFormBuilderInputs.inputs.map((formInput: any, i: number) => (
        // FIXME: DONT USE INDEX AS KEY as input can be deleted which causes inconsistent key
        <FormInput key={i} data={formInput} index={i} />
      ))}
      <Flex justifyContent="end" px={2} mb={20}>
        <Button
          display="flex"
          gap={2}
          alignItems="center"
          onClick={() => dispatch(createInput())}
          bg="white"
        >
          <Text as="span">Add new field</Text>
          <AddIcon aria-hidden />
        </Button>
      </Flex>
    </Box>
  );
};
