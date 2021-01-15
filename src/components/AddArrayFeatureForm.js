import React, { useContext } from "react";
import StyledButton from "../styledComponents/StyledButton";
import MainContext from "../contexts/MainContext";
import Form from "../styledComponents/Form";
import StyledField from "../styledComponents/StyledField";

const AddArrayFeatureForm = () => {
  const value = useContext(MainContext);
  const { addNewEthnicity, handleFeatureModalClose } = value;
  return (
    <Form onSubmit={addNewEthnicity}>
      {" "}
      <StyledField
        name="featureValue"
        id="standard-basic"
        label="type value"
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

export default AddArrayFeatureForm;
