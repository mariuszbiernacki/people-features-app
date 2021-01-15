import React, { useContext } from "react";
import StyledButton from "../styledComponents/StyledButton";
import MainContext from "../contexts/MainContext";
import Form from "../styledComponents/Form";
import StyledField from "../styledComponents/StyledField";

const AddFeatureForm = () => {
  const value = useContext(MainContext);
  const { addNewFeature, handleFeatureModalClose } = value;
  return (
    <Form onSubmit={addNewFeature}>
      <StyledField
        name="featureName"
        id="standard-basic"
        label="type cell name like country, language etc."
        variant="outlined"
      />
      <StyledField
        name="featureValue"
        id="standard-basic"
        label="type cell value like Poland, English etc."
        variant="outlined"
      />
      <StyledButton
        type="submit"
        onClick={handleFeatureModalClose}
        color="primary"
        autoFocus
        variant="contained"
      >
        Add
      </StyledButton>
    </Form>
  );
};

export default AddFeatureForm;
