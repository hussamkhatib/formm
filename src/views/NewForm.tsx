import { Grid } from "@chakra-ui/react";
import FormBuilder from "../components/FormBuilder";

const NewForm = () => {
  return (
    <Grid minHeight="100vh" templateRows="auto 1fr">
      <FormBuilder />
    </Grid>
  );
};

export default NewForm;
